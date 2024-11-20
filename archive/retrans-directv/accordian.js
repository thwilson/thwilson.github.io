      (() => {
        window.onload = function () {
          setupHandlers();
        };

        let setupHandlers = function () {
          let questions = document.getElementsByClassName("questionbox");
          [...questions].forEach((question) => {
            question.addEventListener("click", function () {
              let answer = this.nextElementSibling.className.includes("answer")
                ? this.nextElementSibling
                : null;
              let arrow = this.getElementsByClassName("arrow")[0];
              if (answer) {
                if (answer.className.includes("answer_open_true")) {
                  answer.classList.remove("answer_open_true");
                  arrow.classList.remove("arrow_flipped_true");
                } else {
                  answer.className += " answer_open_true";
                  arrow.className += " arrow_flipped_true";
                }
              }
            });
          });
        };
      })();