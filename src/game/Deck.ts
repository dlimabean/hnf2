// src/game/Deck.ts

import { Card, Suit, Rank } from './types';
import { v4 as uuidv4 } from 'uuid';

/**
 * A class to create, shuffle, and manage the multi-deck pack for Hand and Foot.
 */
export class Deck {
  private cards: Card[] = [];

  constructor(private numberOfDecks: number = 5) {
    this.createDecks();
    this.shuffle();
  }

  /**
   * Creates the full set of cards by combining multiple standard decks.
   */
  private createDecks(): void {
    const suits = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades];
    const ranks = [
      Rank.Ace, Rank.Two, Rank.Three, Rank.Four, Rank.Five, Rank.Six,
      Rank.Seven, Rank.Eight, Rank.Nine, Rank.Ten, Rank.Jack, Rank.Queen, Rank.King
    ];

    for (let i = 0; i < this.numberOfDecks; i++) {
      // Add standard 52 cards
      for (const suit of suits) {
        for (const rank of ranks) {
          this.cards.push(this.createCard(suit, rank));
        }
      }
      // Add two Jokers per deck
      this.cards.push(this.createCard(Suit.None, Rank.Joker));
      this.cards.push(this.createCard(Suit.None, Rank.Joker));
    }
  }

  /**
   * Creates a single card object with its value and wild status.
   */
  private createCard(suit: Suit, rank: Rank): Card {
    const id = uuidv4();
    const isWild = rank === Rank.Two || rank === Rank.Joker;
    let value = 0;

    if (rank === Rank.Joker) value = 50;
    else if (rank === Rank.Ace || rank === Rank.Two) value = 20;
    else if ([Rank.King, Rank.Queen, Rank.Jack, Rank.Ten, Rank.Nine, Rank.Eight].includes(rank)) value = 10;
    else if ([Rank.Seven, Rank.Six, Rank.Five, Rank.Four].includes(rank)) value = 5;
    // Threes have no value when melded, only as Red 3s bonus or penalty when left in hand.
    // For simplicity in melding, we can treat their meld value as 0.
    // The penalty for black 3s in hand is often 5, which can be handled separately.

    return { id, suit, rank, value, isWild };
  }

  /**
   * Shuffles the deck using the Fisher-Yates (aka Knuth) shuffle algorithm.
   */
  public shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  /**
   * Deals a specified number of cards from the top of the deck.
   * @param count The number of cards to deal.
   * @returns An array of cards.
   */
  public deal(count: number): Card[] {
    return this.cards.splice(0, count);
  }

  /**
   * Returns the remaining number of cards in the deck.
   */
  public getCardsRemaining(): number {
    return this.cards.length;
  }

  /**
   * Returns all cards currently in the deck.
   */
  public getCards(): Card[] {
    return this.cards;
  }
}
