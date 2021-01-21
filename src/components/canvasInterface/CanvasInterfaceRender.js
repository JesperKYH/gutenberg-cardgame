import React from 'react'
import {
    
    NotEnoughError,
    EndTurnButton, 
    TurnInicator
} from "../canvas/CanvasElements";
import {RightToolBarContainer, Hpcontainer, GoldStatus, LeftToolBarContainer} from "../player/PlayerElements";
/* import { PlayCardButton, GoldStatus, LeftToolBarContainer } from "./Player/PlayerElements"; */
import { OpponentDeckWrapper, PlayerDeckWrapper, VisualDeck, OpponentCardsLeft, PlayerCardsLeft, AttackButton, OpponentHpcontainer } from './CanvasInterfaceElements'


const CanvasInterfaceRender = ({ endTurnFunc, startGame, enoughgold, buttonShow, whichTurn, gold, onPlayCard, hp, deck, oppDeck, attackingFunc, opponentHp }) => {


    return (
        <>
           <OpponentDeckWrapper>
                <VisualDeck><OpponentCardsLeft>{oppDeck.length}</OpponentCardsLeft></VisualDeck>
            </OpponentDeckWrapper>
           <PlayerDeckWrapper>
                <VisualDeck><PlayerCardsLeft>{deck.length}</PlayerCardsLeft></VisualDeck>
            </PlayerDeckWrapper>


            
            <LeftToolBarContainer>

            <GoldStatus>
            {gold}{" "}
            <i
            className="fas fa-coins"
            style={{ fontSize: "2rem", marginLeft: "6px" }}
                ></i>
            </GoldStatus>

            </LeftToolBarContainer>

            <EndTurnButton onClick={endTurnFunc}>End Turn</EndTurnButton>

            <NotEnoughError style={enoughgold ? { display: "block" } : { display: "none" }} >
                Not Enough Gold!
            </NotEnoughError>
            
            
            <OpponentHpcontainer>{opponentHp}</OpponentHpcontainer>

            <RightToolBarContainer>
            <AttackButton onClick={attackingFunc}>Attack</AttackButton>

                <Hpcontainer>{hp}</Hpcontainer>
            </RightToolBarContainer>

             <TurnInicator>{whichTurn}</TurnInicator>
        </>
    )
}

export default CanvasInterfaceRender
