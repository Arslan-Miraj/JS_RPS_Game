let user_score = 0;
let comp_score = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let yours = document.querySelector(".user-choice .select");
let computer = document.querySelector(".computer-choice .select");
let c_score = document.querySelector("#computer-score");
let u_score = document.querySelector("#user-score");

//Computer Choice
const comp = () => {
    const options = ["rock", "paper", "scissor"];
    let comp_choice = Math.floor(Math.random() * 3);
    return options[comp_choice];
}

// User Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        Play(user_choice);
    });
});

const winner = (win) => {
    if(win){
        user_score++;
        u_score.innerText = user_score;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else{
        comp_score++;
        c_score.innerText = comp_score;
        msg.innerText = "Computer Win";
        msg.style.backgroundColor = "red";
    }
}


const Play = (user_choice) => {
    //Computer Choice
    let choice = comp();            

    if (user_choice === choice){
        msg.innerText = "Its a tie!";
        yours.innerText = user_choice;
        computer.innerText = choice;
        msg.style.backgroundColor = "black";
    }
    else{
        let win = true;
        if (user_choice === "rock"){
            // paper, scissor
            win = choice === "paper" ? false : true;
        }
        else if (user_choice === "paper"){
            // rock, scissor
            win = choice === "scissor" ? false : true;
        }
        else if (user_choice === "scissor"){
            // rock, paper
            win = choice === "rock" ? false : true;
        }

        winner(win);
        yours.innerText = user_choice;
        computer.innerText = choice;
        // selected_choice(user_choice);
    }


}