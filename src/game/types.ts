// src/game/types.ts

/**
 * Represents the four standard playing card suits.
 */
export enum Suit {
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
  Clubs = 'Clubs',
  Spades = 'Spades',
  None = 'None', // For Jokers
}

/**
 * Represents the rank of a playing card, from Ace to King, plus Joker.
 */
export enum Rank {
  Ace = 'Ace',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'Jack',
  Queen = 'Queen',
  King = 'King',
  Joker = 'Joker',
}

/**
 * Represents a single playing card with a suit, rank, and point value.
 */
export interface Card {
  id: string; // A unique identifier for this specific card instance
  suit: Suit;
  rank: Rank;
  value: number;
  isWild: boolean;
}

/**
 * Represents a player in the game.
 */
export interface Player {
  id: string; // Corresponds to the socket ID
  name: string;
  hand: Card[];
  foot: Card[];
  isInFoot: boolean; // True if the player is currently playing from their foot
}

/**
 * Represents a team of two players.
 */
export interface Team {
  id: string;
  players: [Player, Player];
  melds: Record<Rank, Card[]>; // A map where the key is the rank and the value is an array of cards
  books: Book[];
  score: number;
  redThrees: Card[];
}

/**
 * Represents a completed book of 7 cards.
 */
export interface Book {
  rank: Rank;
  type: 'clean' | 'dirty' | 'wild'; // Clean (no wilds), Dirty (with wilds), Wild (all wilds)
}

/**
 * Represents the overall state of the game.
 */
export interface GameState {
  id: string; // A unique ID for the game session
  teams: [Team, Team];
  stock: Card[];
  discard: Card[];
  currentPlayerIndex: number; // Index pointing to the player in the turn order
  round: number;
  isRoundOver: boolean;
}
