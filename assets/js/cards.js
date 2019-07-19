class Card {
    constructor() {
        this.cover;
        this.type; 
        /*
            public: 1 red 1 blue 3 trophy
                    1 red 1 brown 2 trophy
                    5 any 5 trophy
                    1 red 1 yellow 3 trohpy
                    1 yellow 1 brown 2 trophy
                    1 blue 1 brown 2 trophy

            privlage: 2 red/blue/yellow-2 trophy (x6)
                      move (x3) 2, 2, 3 trophy (diagonal, l shaped, runningstart) (x6)
                      pure trophy 4 trophy (x2)
                      1 trophy per 1 brown, 2 trophy for 2 privlage cards, 1 privilage and 1 frog pair for 2 trophy (9x)
                      required: fewest trohpy cards 5 trophy (x1) fewer frog by 5, by 3 (+5, +3) (x3)

        */
        this.ability; // move, conditional, fixed
        this.trophyPoints; 
        this.frogsColors;
    }

    createPrivilageCard() {
        this.type = "privilage";
        //place four cards on the board at the start of the game
    }

    createPublicCard() {
        this.type = "public";
        //puts two public cards onto the board at the start of the game
    }

    createPrivateSetCard() {
        this.type= "private";
        //each player gets two at the start of the game
    }
}