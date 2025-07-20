// src/game/Game.ts

import { v4 as uuidv4 } from 'uuid';
import { Deck } from './Deck';
import { GameState, Player, Team, Card, Rank } from './types';

/**
 * Manages the state and logic of a Hand and Foot game session.
 */
export class Game {
  public state: GameState;

  constructor(playerNames: string[]) {
    if (playerNames.length !== 4) {
      throw new Error('Hand and Foot requires exactly 4 players.');
    }
    this.state = this.initializeGameState(playerNames);
  }

  /**
   * Sets up the initial state for a new game.
   * @param playerNames An array of four player names.
   * @returns The initial GameState object.
   */
  private initializeGameState(playerNames: string[]): GameState {
    const deck = new Deck(5); // 5 decks for a 4-player game

    // Create players
    const players: Player[] = playerNames.map(name => ({
      id: uuidv4(), // This will be replaced by socket ID later
      name,
      hand: deck.deal(11),
      foot: deck.deal(11),
      isInFoot: false,
    }));

    // Create teams (partners are across from each other)
    const team1: Team = {
      id: 'team-1',
      players: [players[0], players[2]],
      melds: {},
      books: [],
      score: 0,
      redThrees: [],
    };
    const team2: Team = {
      id: 'team-2',
      players: [players[1], players[3]],
      melds: {},
      books: [],
      score: 0,
      redThrees: [],
    };

    // Create the initial stock and discard piles
    const stock = deck.getCards();
    const discard: Card[] = [];
    
    // The first card of the discard pile cannot be a wild or a three.
    let topCard = stock.shift();
    while (topCard && (topCard.isWild || topCard.rank === Rank.Three)) {
        stock.push(topCard); // Bury it at the bottom of the stock
        topCard = stock.shift();
    }
    if (topCard) {
        discard.push(topCard);
    }

    return {
      id: uuidv4(),
      teams: [team1, team2],
      stock,
      discard,
      currentPlayerIndex: 0, // Player 1 starts
      round: 1,
      isRoundOver: false,
    };
  }

  // --- Placeholder methods for player actions ---

  public drawFromStock(playerId: string): void {
    // TODO: Implement logic for a player to draw 2 cards from the stock.
    console.log(`${playerId} drew from stock.`);
  }

  public drawFromDiscard(playerId: string): void {
    // TODO: Implement logic for a player to pick up the discard pile.
    console.log(`${playerId} drew from discard.`);
  }

  public meld(playerId: string, rank: Rank, cards: Card[]): void {
    // TODO: Implement logic for a player to meld cards.
    console.log(`${playerId} melded ${cards.length} cards of rank ${rank}.`);
  }

  public discard(playerId: string, card: Card): void {
    // TODO: Implement logic for a player to discard a card to end their turn.
    console.log(`${playerId} discarded a ${card.rank} of ${card.suit}.`);
  }
}
