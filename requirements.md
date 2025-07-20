# Hand and Foot - Minimum Viable Product (MVP) Requirements

This document outlines the core features and rules for a Minimum Viable Product (MVP) of the card game "Hand and Foot". The goal is to create a functional, playable game for four players, which can be expanded upon in the future.

## 1. Core Game Concept

- **Game Type:** Four-player, two-team partnership game. Partners will be seated opposite each other. Or two teams of one player each.
- **Objective:** Be the team to score the most points over four rounds of play. Points are earned by melding cards and creating books.
- **Platform:** Web browser.

## 2. Game Setup & Deck

- **Decks:** The game will use 5 standard 52-card decks, including all 10 Jokers (270 cards total).
- **The Deal:**
    - At the start of a new game, one player is randomly designated as the dealer.
    - The game will automatically deal each of the four players two hands of 11 cards: the "Hand" (visible to the player) and the "Foot" (face-down).
- **The Piles:**
    - The remaining cards will form the face-down **Stock Pile** (draw pile).
    - One card will be flipped from the Stock Pile to start the face-up **Discard Pile**.
    - If the initial discard card is a wild card (Joker, 2) or a 3, it will be automatically buried in the Stock Pile and a new card will be drawn.

## 3. Gameplay Mechanics (A Single Round)

### 3.1. Player Turn

A player's turn will consist of the following steps, enforced by the game logic:
1.  **Draw:** The player MUST draw cards.
    - Draw one card from the Stock Pile.
    - OR, pick up the **top 5 cards** from the Discard Pile. This is only allowed if the player holds two cards of the same rank as the top card. The player must immediately meld the top card with their two matching cards.
2.  **Meld (Optional):** The player may meld cards by placing them on the table.
    - Melds are shared between partners.
    - The game will enforce the minimum meld requirement for each round.
3.  **Discard:** The player MUST discard one card to the Discard Pile to end their turn.

### 3.2. Melding and Books

- **Melds:** A set of 3 to 6 cards of the same rank.
- **Books:** A completed meld of 7 cards. The game will automatically close a book when the 7th card is added.
    - **Clean Book (Red Book):** 7 natural cards.
    - **Dirty Book (Black Book):** Contains wild cards (Jokers or 2s). Must contain no more than 2 wild cards.
- **Initial Meld Requirement:** A team's first meld in each round must meet a minimum point value:
    - **Round 1:** 50 points
    - **Round 2:** 90 points
    - **Round 3:** 120 points
    - **Round 4:** 150 points

### 3.3. Special Cards

- **Wild Cards (Jokers & 2s):** Can be used to substitute any card in a meld (except red 3s).

### 3.4. The Foot

- A player gains access to their "Foot" hand only after they have played all the cards from their initial "Hand". The game will automatically make the Foot available when the Hand is empty.

### 3.5. Going Out

- The round ends when a player "goes out".
- To go out, the team must have completed at least one Clean Book.
- A player must play all cards from their Hand and Foot, ending with a final discard or meld.

## 4. Scoring

At the end of each round, the game will automatically calculate and display the scores.

- **Positive Points:**
    - Going Out Bonus: +100 points
    - Clean Book: +300 points each
    - Dirty Book: +100 points each
    - Red 3s: +500 points each (only if the team has melded)
    - Card values from all melded cards.
- **Negative Points:**
    - Card values of all cards left in the players' Hands and Feet are subtracted from the team's score.
- **Card Point Values:**
    - **Joker:** 50 pts
    - **Aces, 2s:** 20 pts
    - **K, Q, J, 10, 9, 8:** 10 pts
    - **7, 6, 5, 4:** 5 pts
    - **Black 3s:** 5 pts 
    - **Red 3s:** 300 pts 

## 5. User Interface & Experience (MVP)

- **Game Lobby:** A simple screen where players can gather before starting a game. For the MVP, we can assume 2 players are present.
- **Game Board:** A clear view of the table showing:
    - The player's own Hand (and Foot when available).
    - Team meld areas.
    - The Stock Pile and Discard Pile.
    - Current round number and score.
- **Actions:** Clear buttons for drawing, and intuitive drag-and-drop or click-to-select for melding and discarding cards.
- **No User Accounts:** For the MVP, there will be no login system or persistent user data.

## 6. Out of Scope for MVP

The following features will not be included in the initial version:
- AI / computer players.
- Customizable house rules.
- Player profiles, stats, or leaderboards.
- Chat functionality.
- Animations or advanced visual effects.
- Different game modes (e.g., 2-player or 6-player).
- "Asking permission" to go out.
