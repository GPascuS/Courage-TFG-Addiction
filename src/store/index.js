import { createStore } from 'vuex'
import emailjs from 'emailjs-com';

export default createStore({
  state: {
    appStates: {
      menu: 0,
      introduction: 1,
      situation: 2,
      gameover: 3,
      win: 4,
      quizz: 5,
      end: 6,
      tutorial: 7,
      outcome: 8,
      comment: 9
    },
    game: {
      appState: 0,
      current_day: 0,
      current_situation: 0,
      current_quizz: 0,
      current_quizz_question: 0,
      player: {
        age: 0,
        mood: 50
      },
      barstyle: "width: 50%",
      barclass: "progress-bar bg-warning",
      //bgimage: "./assets/teen_mobile_op.png"
      bgimage: "background: url(" + "./assets/teen_mobile_op.png" + ") no-repeat center fixed; background-size: contain;",
      mail: false
    },
    day_info: [
      {
        situations: [
          {
            explanation: 'You are walking to school in the morning while having a non-relevant discussion on twitter when you see your best friend, Sofia, approaching you. She looks pretty sad and you almost could not hear her greeting. What would you do?',
            options: [
              {
                text: 'Completely ignore her and continue discussing on twitter. She is just sleepy today.', 
                outcome: 'Sofia does not say a single word and when you arrive at school, she goes straight to class without talking to anyone else. During the first class, she asks the professor to go home, visibly about to cry. Your mood goes down, a lot…',
                mood: -30
              },
              {
                text: 'Ask her to tell you what’s the matter out of obligation, but continue focused on your discussion.', 
                outcome: 'Since you have not really listened to her, you can’t help her at all and the situation becomes uncomfortable. She is visibly mad at you, but maybe she was able to let off steam. Your mood goes down.',
                mood: -10
              },
              {
                text: 'Put your phone in the pocket and try to understand and cheer her up by all means. Your friends are more important than a random discussion.', 
                outcome: 'Sofia tells you that she is having a hard time studying for the final exams because she is worried about not being a good enough student. When you arrive to the school, you notice that she is slightly happier and she thanks you for listening to her. Your mood goes up... a lot!',
                mood: 30
              }
            ]
          },
          {
            explanation: 'The first three classes are over, so it’s playtime! Who do you want to play with?',
            options: [
              {
                text: 'I’d rather sit alone and check my instagram notifications, I got plenty this morning.',
                outcome: 'Playtime is over, and even if you did what you felt like doing, you feel empty. You start to wonder if it would have been better to play with your friends. Your mood goes down.',
                mood: -20
              },
              {
                text: 'I want to play a basketball game with my classmates!', 
                outcome: 'You had a lot of fun, but at the same time you feel anxious and worried because you left your social media unattended. Your mood stays the same.',
                mood: 0
              },
              {
                text: 'I want to talk with Sofia, it is always fun to have her around.',
                outcome: 'You have a very fun time with Sofia making weird faces and taking selfies. Maybe you can upload some of them later. Your mood goes up!',
                mood: 20
            }
            ]
          }
        ],
        summary: 'In this day, you have seen examples of addiction to social media. This can be seen with actions such as putting a random social media event before someone important like close friends or family. Social media addiction does also cause abstinence syndrome, usually manifested as anxiety and a need to be constantly connected. On 2017, it was estimated that 210 million people were addicted to social media worldwide.'
      },
      {
        situations: [
          {
            explanation: 'You are in the middle of a self-study math class and you notice some classmates are planning on playing a Facebook multiplayer game to see who can get the highest score.What would you do?',
            options: [
              {
                text: 'Continue studying, this is not the time to play and the final exams are close.',
                outcome: 'You start studying but can’t completely focus because they are being loud but not enough for the professor to notice or care. Since you hear them having fun, you start to regret not joining, but you know you did the right thing. Your mood goes up!',
                mood: 10
              },
              {
                text: 'Joining them of course, I really don’t want to miss out, it looks fun...', 
                outcome: 'As you are opening the application, you remember that you had your sound on because you had been listening to TikTok videos earlier in the morning. Unfortunately it’s too late, the professor notices that you were about to play and confiscates your phone, leaving you with no will to study and a deep sensation of being missing out. Your mood goes down... a lot.',
                mood: -30
              },
              {
                text: 'Tell the professor. This attitude is unacceptable in an study environment.',
                outcome: 'The professor confiscates the phones of the classmates that were playing. They glare at you, so they probably won\'t want to play with you for a while, but at the same time the professor and the rest of the class thank you, as having them playing would have been disturbing at the time of studying. Your mood goes up... a lot!',
                mood: 30
            }
            ]
          },
          {
            explanation: 'Its late afternoon, you are at home and your parents tell you that dinner will be ready in about 20 minutes. What would you do until then?',
            options: [
              {
                text: 'Play a Facebook multiplayer game with your classmates.',
                outcome: 'Dinner time arrives, but you are in the middle of a game. Your parents insist you on leaving the game, yet you continue playing because you want to be the top scorer. This ends up in a heated argument, which leaves both parts mad at each other and you with a bad score. Your mood goes down... a lot.',
                mood: -30
              },
              {
                text: 'Set the table and spend some time with my family.', 
                outcome: 'You had a lot of fun conversating with your parents, more than what you actually thought. After all you only have one family, and are probably the ones that know you better. Your mood goes up... a lot!',
                mood: 30
              },
              {
                text: 'Post an Instagram story, I haven’t uploaded one since yesterday and i have to keep my followers updated!',
                outcome: 'Whether it was because of the content or the time of upload, no one cared about your Instagram story at all. You are happily dinning with your parents, but even then you feel lonely, and also a little bit rejected. Your mood goes down.',
                mood: -20
            }
            ]
          }
        ],
        summary: 'In this day, you have seen a FoMO (Fear of Missing Out) situation. It is an anxiety disorder derived from social media addiction that, as the name suggests, generates a constant desire of knowing what others are doing and causes restlessness when this condition can\t be met. The second event was related to another implication of social media addiction, which is forgetting to fulfill your basic needs.'
      },
      {
        situations: [
          {
            explanation: 'Today is the school festival, numerous performances are being held at the events hall and your little cousin Jim and his class are about to dance. You offer yourself to record him so you both can upload it to Instagram later, but he does not care about social media and asks you to enjoy the show instead. What would you do?',
            options: [
              {
                text: 'Ignore him and record it. Even if he does not care, it will still be a nice addition to your account.',
                outcome: 'A little bit later, a mad Jim texts you and asks you to delete the video. He explains that the reason he did not want you to record him was because he is not comfortable with his body and now his classmates are making fun of him.Even if it was not your intention, you exposed him against his will and made him think about his insecurities. Your mood goes down... a lot.',
                mood: -30
              },
              {
                text: 'Enjoy your cousin’s performance. After all, he told you he did not care about you recording.', 
                outcome: 'You have no regrets, the show would have been much difficult to enjoy if you had to concentrate on recording. It was a lot of fun and also an experience you will not forget! Your mood goes up... a lot!',
                mood: 30
              },
              {
                text: 'Record it, but with the sole purpose of capturing a good moment and share it with your family in the future.',
                outcome: 'Jim accepts the fact that you recorded it and thanks you for keeping it a family thing, so you are happy to have recorded it. Your mood goes up!',
                mood: 10
            }
            ]
          },
          {
            explanation: 'The festival has finished. Your parents tell you that they will be having dinner with Jim and his family on a restaurant, but they let you choose if you want to come because they feel like you may get bored. What would you do?',
            options: [
              {
                text: 'Take advantage of the sunset and take some photos for snapchat and Instagram, then go home.',
                outcome: 'You were so concentrated on choosing filters that it’s gotten too late. You run home, but your parents have already arrived and scold you for arriving late and not eating. Your mood goes down.',
                mood: -20
              },
              {
                text: 'You’d better head home and order a pizza. After all they are right, family meals are always troublesome.', 
                outcome: 'You arrived home without any issue, ordered the pizza and ate it while browsing through instagram. You didn’t do anything special and, considering the time you spend on social media, you needed some real social interaction after all, so you feel empty. Your mood goes down.',
                mood: -10
              },
              {
                text: 'Go with them, you don’t get to hang out with Jim very often.',
                outcome: 'Your parents were wrong, it was not boring at all! You had a lot of fun conversating with Jim and his parents. You also noticed that you needed some real social interaction, so your mood goes up!',
                mood: 30
            }
            ]
          }
        ],
        summary: ''
      }
      
    ],
    quizz_info: [
      {
        questions: [
        {
          question: 'To which gender identity do you most identify?',
          answers: [
            'Male',
            'Female',
            'Transgender Male',
            'Transgerder Female',
            'Not Listed',
            'Prefer not to answer'
          ]
        },
        {
          //question: 'Rate on a scale from 1 to 5 your level of understanding of the problems an excessive use of social media platforms can generate.Take into account that 1 means very poor or null knowledge and 5 means complete and detailed knowledge',
          question: 'An excessive use of social media platforms can lead to negative effects in physical and mental health',
          answers: [
            'Strongly Disagree',
            'Disagree',
            'Undecided',
            'Agree',
            'Strongly agree'
          ]
        },
        /*{
          question: 'Do you think you are addicted to social media?',
          answers: [
            'Not at all',
            'Maybe a little bit',
            'Completely'
          ]
        },*/
        {
          question: 'You spend a lot of time thinking about social media or planning how to use it.',
          answers: [
            'Very rarely',
            'Rarely',
            'Sometimes',
            'Often',
            'Very often'
          ]
        },
        {
          question: 'You feel an urge to use social media more and more.',
          answers: [
            'Very rarely',
            'Rarely',
            'Sometimes',
            'Often',
            'Very often'
          ]
        },
        {
          question: 'You use social media in order to forget about personal problems.',
          answers: [
            'Very rarely',
            'Rarely',
            'Sometimes',
            'Often',
            'Very often'
          ]
        },
        {
          question: 'You have tried to cut down on the use of social media without success.',
          answers: [
            'Very rarely',
            'Rarely',
            'Sometimes',
            'Often',
            'Very often'
          ]
        },
        {
          question: 'You become restless or troubled if you are prohibited from using social media.',
          answers: [
            'Very rarely',
            'Rarely',
            'Sometimes',
            'Often',
            'Very often'
          ]
        },
        {
          question: 'You use social media so much that it has had a negative impact on your job/studies.',
          answers: [
            'Very rarely',
            'Rarely',
            'Sometimes',
            'Often',
            'Very often'
          ]
        }
        ]
      },
      {
        questions: [
        {
          //question: 'Rate on a scale from 1 to 5 your level of understanding of the problems an excessive use of social media platforms can generate.Take into account that 1 means very poor or null knowledge and 5 means complete and detailed knowledge',
          question: 'An excessive use of social media platforms can lead to negative effects in physical and mental health',
          answers: [
            'Strongly Disagree',
            'Disagree',
            'Undecided',
            'Agree',
            'Strongly agree'
          ]
        },
        {
          question: 'How much time do you spend on social media on a daily basis?',
          answers: [
            'Less than 1 hour',
            'Between 1 and 2 hours',
            'Between 2 and 4 hours',
            'More than 4 hours'
          ]
        },
        /*{
          question: 'Do you think you are addicted to social media?',
          answers: [
            'Not at all',
            'Maybe a little bit',
            'Completely'
          ]
        },*/
        {
          question: 'After finishing the game, are you more aware of the possible consequences being addicted to social media can have?',
          answers: [
            'No, I knew everything.',
            'Yes, I knew most of it, but I was able to grasp some bits of detailed knowledge about the subject.',
            'Yes, I didn\'t know most of the things the game pointed out to me.'
          ]
        },
        {
          question: 'Do you think you would chose other options if you played the game again with your current knowledge and awareness? How many?',
          answers: [
            'No. None.',
            'Yes. Only 1',
            'Yes. 2 or 3',
            'Yes. 4 or 5',
            'Yes, all of them.'
          ]
        }
        ]
      }

    ],
    collected_data: {
      options_chosen: [],
      game_status: '',
      quizz_answers: [],
      observations: '',
      bergenAddiction: false,
      bergenScore: 0
    }
  },
  mutations: {
    optionSelected(state, index) {

      //Restric options:
      let last_index = state.collected_data.options_chosen[state.collected_data.options_chosen.length - 1];
      if (state.game.current_day == 0 && state.game.current_situation == 1 && last_index == 0 && index == 2) return;
      if (state.game.current_day == 1 && state.game.current_situation == 1 && last_index == 2 && index == 0) return;
      if (state.game.current_day == 2 && state.game.current_situation == 1 && last_index == 0 && index == 2) return;

      let mood = state.day_info[state.game.current_day].situations[state.game.current_situation].options[index].mood;
      state.game.player.mood += mood;
      state.game.player.mood = state.game.player.mood < 0 ? 0 : 
                              (state.game.player.mood > 100 ? 100: state.game.player.mood);
      
      state.game.barstyle = "width: " + state.game.player.mood + "%";
      if (state.game.player.mood <= 30) state.game.barclass = "progress-bar bg-danger";
      else if (state.game.player.mood >= 60) state.game.barclass = "progress-bar bg-success";
      else state.game.barclass = "progress-bar bg-warning";

      state.collected_data.options_chosen.push(index);

      if (state.game.player.mood == 0) { 
        //state.game.appState = state.appStates.gameover;
        state.collected_data.game_status = 'lose';
      }

      state.game.appState = state.appStates.outcome;
    },
    endOutcome(state) {
      if (state.game.current_day == (state.day_info.length - 1) && state.game.current_situation == 1) { 
        if(state.game.player.mood == 0) {
          state.game.appState = state.appStates.gameover;
        }
        else {
          state.collected_data.game_status = 'win';
          state.game.appState = state.appStates.win;
        }
        return;
      }

      if (state.game.current_situation == 1) state.game.current_day += 1;
      state.game.current_situation = (state.game.current_situation + 1) % 2;
      state.game.appState = state.appStates.situation;
    },
    changeAppState(state, appState) {
      state.game.appState = appState;
    },
    answerSelected(state, index) {
      if (state.game.player.age != 0) state.game.mail = true;
      state.collected_data.quizz_answers.push(index);

      if(state.game.current_quizz_question == (state.quizz_info[state.game.current_quizz].questions.length - 1)) {
        if (state.game.current_quizz == 1) {
          let i;
          let bergenStatus = 0;
          for (i = 2; i < 8; i++) {
            state.collected_data.bergenScore += state.collected_data.quizz_answers[i] + 1;
            if (state.collected_data.quizz_answers[i] >= 3) {
              bergenStatus += 1;
            }
          }
          if (bergenStatus >= 4) {
            state.collected_data.bergenAddiction = true;
          }


          state.game.appState = state.appStates.comment;
        }
        else {
          state.game.appState = state.appStates.tutorial;
          state.game.current_quizz += 1;
          state.game.current_quizz_question = 0;
          return;
        }
      } 

      state.game.current_quizz_question += 1;
    },
    endComment(state) {

      //state.game.mail = false; // TEST REMOVE - TEST REMOVE - TEST REMOVE - TEST REMOVE //
      if (state.game.mail == true) {
        // Send email with the results
        const templateParams = {
          O00: state.collected_data.options_chosen [0], O01: state.collected_data.options_chosen [1],
          O10: state.collected_data.options_chosen [2], O11: state.collected_data.options_chosen [3],
          O20: state.collected_data.options_chosen [4], O21: state.collected_data.options_chosen [5],
          O30: 'not implemented', O31: 'not implemented',
          O40: 'not implemented', O41: 'not implemented',
          //O30: state.collected_data.options_chosen [6], O31: state.collected_data.options_chosen [7],
          //O40: state.collected_data.options_chosen [8], O41: state.collected_data.options_chosen [9],
          Q1: state.collected_data.quizz_answers [0], Q2: state.collected_data.quizz_answers [1],
          Q3: state.collected_data.quizz_answers [2], Q4: state.collected_data.quizz_answers [3],
          Q5: state.collected_data.quizz_answers [4], Q6: state.collected_data.quizz_answers [5],
          Q7: state.collected_data.quizz_answers [6], Q8: state.collected_data.quizz_answers [7],
          Q9: state.collected_data.quizz_answers [8], Q10: state.collected_data.quizz_answers [9],
          Q11: state.collected_data.quizz_answers [10], Q12: state.collected_data.quizz_answers [11],
          state: state.collected_data.game_status,
          observations: state.collected_data.observations,
          mood: state.game.player.mood,
          age: state.game.player.age,
          bergenA: state.collected_data.bergenAddiction,
          bergenS: state.collected_data.bergenScore
        }
        try {
          emailjs.send('service_ym8jcam', 'template_mddyawq', templateParams,
          'user_QsEKPplZoLHodC3lltyCe', {
            //name: 'Guillermo',
            //email: 'guillermo.pascual02estudiant.upf.edu',

          })
  
        } catch(error) {
            console.log({error})
        }
      }


      state.game.appState = state.appStates.end;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
