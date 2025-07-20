# hnf2 - A Hand and Foot Card Game

This project is a web-based implementation of the classic card game "Hand and Foot". The goal is to create a fun, real-time multiplayer experience for four players.

The functional requirements and game rules are defined in the `requirements.md` file.

## Technology Stack

This project will be built using a modern, full-stack TypeScript approach.

*   **Frontend:**
    *   **Framework:** [React](https://reactjs.org/)
    *   **Language:** [TypeScript](https://www.typescriptlang.org/)
    *   **Build Tool:** [Vite](https://vitejs.dev/)
    *   **Styling:** CSS Modules / Plain CSS

*   **Backend:**
    *   **Runtime:** [Node.js](https://nodejs.org/)
    *   **Framework:** [Express](https://expressjs.com/)
    *   **Language:** [TypeScript](https://www.typescriptlang.org/)

*   **Real-time Communication:**
    *   **Protocol:** WebSockets
    *   **Library:** [Socket.IO](https://socket.io/)

## Getting Started

> **Note:** These instructions are placeholders and will be updated as the project is developed.

### Prerequisites

*   [Node.js](https://nodejs.org/en/download/) (which includes npm)
*   A code editor like [VS Code](https://code.visualstudio.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dlimabean/hnf2.git
    cd hnf2
    ```

2.  **Install backend dependencies:**
    ```bash
    # From the root directory
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    # From the client directory (once created)
    cd client
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    ```bash
    # From the root directory
    npm run dev
    ```

2.  **Start the frontend development server:**
    ```bash
    # From the client directory
    cd client
    npm run dev
    ```

The application should then be available at `http://localhost:5173` (or another port specified by Vite).
