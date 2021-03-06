import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  CanvasWrapper,
  GameButton,
  AlreadyAtked,
  WonGamePage,
  WonGamePageButton,
  WonGamePageHeader,
  MuteButton,
  AlphaTag,
  InfoPanel,
} from "./CanvasElements";
import CanvasInterfaceRender from "../canvasInterface/CanvasInterfaceRender";
import { OpponentTurn } from "../opponent/OpponentTurn";
import BattleField from "../battlefield/BattleField";
import OpponentBattleField from "../battlefield/OpponentBattleField";
import OpponentCardsHandRender from "../cardsHand/OpponentCardsHandRender";
import CardsHand from "../cardsHand/CardsHand";
import Player from "../player/Player";
import SpellShowRender from "../Spelleffects/SpellShowRender";
import { DrawOneCard } from "../Spelleffects/Spells";
import {
  OpponentCardContainer,
  PlayerFiledContainer,
  PlayerCardsContainer,
  PlayCardButton,
} from "../player/PlayerElements";
import { BattlefieldContainer } from "../battlefield/BattleFieldElements";
import { BattleMove } from "../canvasInterface/CanvasInterfaceElements";

let newCardHp = 0;
let newCardDef = 0;
let AtkCardNewDef = 0;
let AtkCardNewHp = 0;

const Canvas = ({
  endTurnFunc,
  opponentBattleField,
  opponentCardsinhand,
  startGame,
  cardsinhand,
  buttonShow,
  whichTurn,
  onPlayCard,
  onCardClick,
  battlefield,
  enoughgold,
  hp,
  opponentHp,
  gold,
  oppGold,
  startGameActive,
  deck,
  oppDeck,
  newOpponentHp,
  newPlayerHp,
  newOpponentBattleField,
  spellBattlefieldArr,
  setAttackingCard,
  attackingCard,
  onAttackCardClick,
  setAlreadyAtkedCards,
  attacked,
  silenceBot,
  yourturn,
  chosenAtk,
  setChosenAtk,
  setChosenDefHigh,
  chosenDefHigh,
  selCardHand,
  setSelCardHand,
  defendingCard,
  setDefendingCard,
  round,
  battleMove,
  battlelog,
  selfCreatedDeck,
  showInfo
}) => {
  const [chosenDef, setChosenDef] = useState();
  const [thiscardhasatked, setThiscardhasatked] = useState(false);
  const [enemyTargeted, setEnemeyTarget] = useState(false);

  const [lostgame, setLostGame] = useState(false);
  const [wongame, setWonGame] = useState(false);

  const toggleEnemyTarget = () => {
    if (!yourturn || opponentBattleField.length > 0 || !battlefield.length > 0)
      return;

    setEnemeyTarget(!enemyTargeted);
  };
  const CheckType = (item) => {
    if (item.type === "spell") {
      return false;
    } else {
      return true;
    }
  };

  const attackingFunc = () => {
    if (silenceBot == true) {
      console.log("You are silenced");
      return;
    }
    if (enemyTargeted === true && opponentBattleField.length === 0) {
      if (attacked.includes(attackingCard[0])) {
        setThiscardhasatked(true);
        setTimeout(() => {
          setThiscardhasatked(false);
        }, 2500);
      } else {
        setAlreadyAtkedCards();
        if (attackingCard.length === 0) {
          return;
        }

        let BattleMove = {
          attacker: attackingCard[0].name,
          deffender: "Mr Eyepatch dude",
        };

        battlelog.unshift(BattleMove);

        let newOppHp = opponentHp - attackingCard[0].atk;
        newOpponentHp(newOppHp);

        toggleEnemyTarget();
        setChosenAtk();
        setAttackingCard([]);
      }
    }
    if (attackingCard.length == 0 || defendingCard.length == 0) {
      return;
    } else if (attacked.includes(attackingCard[0])) {
      setThiscardhasatked(true);
      setTimeout(() => {
        setThiscardhasatked(false);
      }, 2500);
      return;
    } else {
      let BattleMove = {
        attacker: attackingCard[0].name,
        deffender: defendingCard[0].name,
      };

      battlelog.unshift(BattleMove);

      setAlreadyAtkedCards();
      DefreduceDefAndHp();
      AtkReduceDefAndHp();
      setAttackingCard([]);
      setDefendingCard([]);
      setChosenAtk();
      setChosenDefHigh();
      /*   if(enemyTargeted){
        toggleEnemyTarget()
      } */
    }
  };

  const reduceOppHp = () => {
    let attack = attackingCard[0].atk;
    let total = defendingCard[0].def + defendingCard[0].hp;
    let damage = attack - total;
    newOpponentHp(opponentHp - damage);
  };

  const reducePlayerHp = () => {
    let attack = defendingCard[0].atk;
    let total = attackingCard[0].def + attackingCard[0].hp;
    let damage = attack - total;
    newPlayerHp(hp - damage);
  };

  const DefreduceDefAndHp = () => {
    if (attackingCard[0].atk <= defendingCard[0].def) {
      newCardDef = defendingCard[0].def - attackingCard[0].atk;
      defendingCard[0].def = newCardDef;
    } else if (attackingCard[0].atk > defendingCard[0].def) {
      let remainAtk = attackingCard[0].atk - defendingCard[0].def;
      newCardHp = defendingCard[0].hp - remainAtk;
      if (newCardHp <= 0) {
        reduceOppHp();
        destroyCard(opponentBattleField, defendingCard);
        if (attackingCard[0].name === "Wizard") {
          if (cardsinhand.length < 4) {
            DrawOneCard(deck, cardsinhand);
          }
        }
      } else {
        defendingCard[0].hp = newCardHp;
        defendingCard[0].def = 0;
      }
    }
  };

  const AtkReduceDefAndHp = () => {
    if (defendingCard[0].atk <= attackingCard[0].def) {
      AtkCardNewDef = attackingCard[0].def - defendingCard[0].atk;
      attackingCard[0].def = AtkCardNewDef;
      return newCardDef;
    } else if (defendingCard[0].atk > attackingCard[0].def) {
      let remainAtk = defendingCard[0].atk - attackingCard[0].def;
      AtkCardNewHp = attackingCard[0].hp - remainAtk;
      if (AtkCardNewHp <= 0) {
        reducePlayerHp();
        destroyCard(battlefield, attackingCard);
      } else {
        attackingCard[0].hp = AtkCardNewHp;
        attackingCard[0].def = 0;
      }
    }
  };

  const destroyCard = (arr, card) => {
    let index = arr.findIndex((x) => x.id === card[0].id);
    arr.splice(index, 1);
  };

  const onDefendingCardClick = (e) => {
    if (yourturn == false) {
      return;
    }

    let clickedDefendingCard = e.target.closest("div");
    let card = opponentBattleField.filter(
      (x) => x.id === clickedDefendingCard.id
    );
    if (defendingCard.length === 0) {
      setDefendingCard(card);
    } else if (defendingCard[0].id === card[0].id) {
      setDefendingCard([]);
    } else {
      setDefendingCard(card);
    }
  };

  useEffect(() => {
    if (hp <= 0) {
      setLostGame(true);
    } else if (opponentHp <= 0) {
      setWonGame(true);
    }
  }, [hp, opponentHp]);

  const restartGame = () => {
    window.location.reload();
    return false;
  };

  return (
    <CanvasWrapper>
      <AlphaTag>Alpha V 0.5</AlphaTag>
      <OpponentTurn />

      <GameButton
        left="50%"
        top="50%"
        style={buttonShow ? { display: "flex" } : { display: "none" }}
        onClick={startGame}
      >
        START GAME
      </GameButton>
      <InfoPanel style={showInfo ? {display: "flex"} : {display: "none"}}>You need to first create a deck of 30 cards to start a game</InfoPanel>
      <GameButton
        left="50%"
        top="80%"
        style={buttonShow ? { display: "flex" } : { display: "none" }}
      >
        <Link style={{ textDecoration: 'none', color: "black"}} to="/interface">Deck Builder</Link>
      </GameButton>

      {wongame ? (
        <WonGamePage>
          <WonGamePageHeader>
            Congratulations! You bested the eyepatch dude! Well done. You're the
            man, champ.
          </WonGamePageHeader>
          <WonGamePageButton onClick={restartGame}>
            Restart Game
          </WonGamePageButton>
        </WonGamePage>
      ) : (
        ""
      )}
      {/* {lostgame ? <LostGamePage></LostGamePage> : ''} */}

      {thiscardhasatked ? (
        <AlreadyAtked>This Card Has Already Attacked!</AlreadyAtked>
      ) : (
        ""
      )}
      {silenceBot ? <AlreadyAtked>You're silenced!</AlreadyAtked> : ""}
      {startGameActive ? (
        <CanvasInterfaceRender
          enoughgold={enoughgold}
          buttonShow={buttonShow}
          endTurnFunc={endTurnFunc}
          startGame={startGame}
          whichTurn={whichTurn}
          onPlayCard={onPlayCard}
          gold={gold}
          hp={hp}
          opponentHp={opponentHp}
          deck={deck}
          oppDeck={oppDeck}
          attackingFunc={attackingFunc}
          toggleEnemyTarget={toggleEnemyTarget}
          enemyTargeted={enemyTargeted}
          round={round}
          battleMove={battleMove}
          battlelog={battlelog}
          yourturn={yourturn}
        />
      ) : (
        <></>
      )}

      <SpellShowRender spellBattlefieldArr={spellBattlefieldArr} />

      <OpponentCardContainer>
        <OpponentCardsHandRender opponentCardsinhand={opponentCardsinhand} />
      </OpponentCardContainer>

      <OpponentBattleField
        onDefendingCardClick={onDefendingCardClick}
        opponentBattlefield={opponentBattleField}
        yourturn={yourturn}
        setChosenDefHigh={setChosenDefHigh}
        chosenDefHigh={chosenDefHigh}
      />

      <BattlefieldContainer>
        <BattleField
          yourturn={yourturn}
          onAttackCardClick={onAttackCardClick}
          Battlefield={battlefield}
          setChosenAtk={setChosenAtk}
          chosenAtk={chosenAtk}
        />
      </BattlefieldContainer>

      <Player onPlayCard={onPlayCard} hp={hp} />

      <PlayerFiledContainer>
        <PlayerCardsContainer>
          <CardsHand
            cardsinhand={cardsinhand}
            onCardClick={onCardClick}
            CheckType={CheckType}
            setSelCardHand={setSelCardHand}
            selCardHand={selCardHand}
            yourturn={yourturn}
          />
        </PlayerCardsContainer>
        {startGameActive ? (
          <PlayCardButton onClick={onPlayCard}>
            Play Selected Card!
          </PlayCardButton>
        ) : (
          <></>
        )}
      </PlayerFiledContainer>
    </CanvasWrapper>
  );
};

export default Canvas;
