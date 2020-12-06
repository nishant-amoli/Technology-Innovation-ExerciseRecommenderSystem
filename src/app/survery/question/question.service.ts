import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Question } from './question';
import { CheckboxQuestion } from './question-checkbox';
import { RadioQuestion } from './question-radio';
import { RadioNoteQuestion } from './question-radio-note';
import { SelectQuestion } from './question-select';
import { TextQuestion } from './question-text';

@Injectable()
export class QuestionService {

    loadAnswersOfCurrentUser(): {key: string, value: string}[]{

      let answers = [];

      // let ans1 = {
      //   key: 'Gender',
      //   value: 'male'
      // };

      // let ans2 = {
      //   key: 'Age',
      //   value: '18-25'
      // };

      // let ans3 = {
      //   key: 'Amount',
      //   value: '5'
      // };

      // answers.push(ans1);
      // answers.push(ans2);
      // answers.push(ans3);

      return answers;
    }
    getQuestions() {

        const questions: Question<string>[] = [

          // 1. Gender
          new RadioQuestion({
            key: 'Gender',
            label: 'Gender',
            options: [
              {key: 'male',  value: 'Male'},
              {key: 'female',  value: 'Female'},
              // {key: 'LGBTQ',   value: 'LGBTQ+'},
              // {key: 'do not wish to answer', value: 'Do not wish to answer'}
            ],
            order: 1
          }),

          // 2. Age
          new RadioQuestion({
            key: 'Age',
            label: 'Age',
            options: [
              {key: 'below18',  value: 'Below 18'},
              {key: '18-25',  value: '18 - 25'},
              {key: '26-30',   value: '26 - 30'},
              {key: '31-40',   value: '31 - 40'},
              {key: 'above40', value: 'Above 40'}
            ],
            order: 2
          }),

          // 3. Fitness Goal
          new RadioQuestion({
            key: 'Fitness Goal',
            label: 'Fitness Goal',
            options: [
              {key: 'Weight Loss',  value: 'Weight Loss'},
              {key: 'Weight Gain',  value: 'Weight Gain'}
            ],
            order: 3
          }),

          // 4. Weight Loss/ Gain Goal (Amount): Text Field
          new TextQuestion({
            key: 'Amount',
            label: 'How much weight amount do you want to loss/gain?',
            value: '',
            required: false,
            order: 4
          }),

          // 5. Workout Preferences
          new RadioQuestion({
            key: 'Workout Preferences',
            label: 'Workout Preferences',
            options: [
              {key: 'Gym',  value: 'Gym'},
              {key: 'Yoga/Aerobics',  value: 'Yoga/Aerobics'}
            ],
            order: 5
          }),

          // 6. How much time can you dedicate to your workout in a day (in minutes)?
          new TextQuestion({
            key: 'Workout Time',
            label: 'How much time can you dedicate to your workout in a day (in minutes)?',
            value: '',
            required: false,
            order: 6
          }),

          // 7. Height (in meters)
          new TextQuestion({
            key: 'Height',
            label: 'Height (in meters)',
            value: '',
            required: false,
            order: 7
          }),

          // 8. Weight (kgs)
          new TextQuestion({
            key: 'Weight',
            label: 'Weight (kgs)',
            value: '',
            required: false,
            order: 8
          }),

          // 9. BMI (optional)
          new TextQuestion({
            key: 'BMI',
            label: 'BMI',
            value: '',
            required: false,
            order: 9
          }),

          // 10. Stamina Level
          new RadioQuestion({
            key: 'Stamina Level',
            label: 'Stamina Level',
            options: [
              {key: 'Beginner',  value: 'Beginner'},
              {key: 'Intermediate',  value: 'Intermediate'},
              {key: 'Expert',  value: 'Expert'}
            ],
            order: 10
          }),

          // 11. Endurance Level
          new RadioQuestion({
            key: 'Endurance Level',
            label: 'Endurance Level',
            options: [
              {key: 'Beginner',  value: 'Beginner'},
              {key: 'Intermediate',  value: 'Intermediate'},
              {key: 'Expert',  value: 'Expert'}
            ],
            order: 11
          }),

          // 12. Weight Lifting Level
          new RadioQuestion({
            key: 'Weight Lifting Level',
            label: 'Weight Lifting Level',
            options: [
              {key: 'Beginner',  value: 'Beginner'},
              {key: 'Intermediate',  value: 'Intermediate'},
              {key: 'Expert',  value: 'Expert'}
            ],
            order: 12
          }),

           // 13. How many days a week do you want to train?
           new TextQuestion({
            key: 'How many days a week do you want to train?',
            label: 'How many days a week do you want to train?',
            value: '',
            required: false,
            order: 13
          }),

           // 14. What is Your Metabolism/Body Type
           new RadioNoteQuestion({
            key: 'What is Your Metabolism/Body Type',
            label: 'What is Your Metabolism/Body Type?',
            options: [
              {key: 'Ectomorph',  value: 'Ectomorph'},
              {key: 'Endomorph',  value: 'Endomorph'},
              {key: 'Mesomorph ',  value: 'Mesomorph '}
            ],
            notes: ['An ectomorph tends to be thin, and struggles to gain weight as either body fat or muscle. They can eat piles of food and stay looking the same, even when gaining muscular weight is their biggest goal. People who battle to gain muscle are often known as "hardgainers."',
            'The endomorph tends to gain weight and keep it on. Their build is a little wider than an ectomorph or mesomorph, with a thick rib cage, wide hips, and shorter limbs. They may have more muscle than either of the other body types, but they often struggle to gain it without significant amounts of accompanying body fat. If you ever feel like you gain 5 pounds simply walking by a donut shop, you may be an endomorph.', 
            'The mesomorph has a middle-of-the-road build that takes the best of both worlds. They tend to have wide shoulders, a narrow waist, relatively thin joints, and round muscle bellies.'],
            order: 14
          }),

          // 15. What is your estimated daily calories intake?
          new TextQuestion({
            key: 'What is your estimated daily calories intake?',
            label: 'What is your estimated daily calories intake?',
            value: '',
            required: false,
            order: 15
          }),

          // 16. Estimated Carbs intake per day?
          new TextQuestion({
            key: 'What is your estimated Carbs intake per day?',
            label: 'What is your estimated Carbs intake per day?',
            value: '',
            required: false,
            order: 16
          }),

          // 17. Estimated Fat intake per day?
          new TextQuestion({
            key: 'What is your estimated Fat intake per day?',
            label: 'What is your estimated Fat intake per day?',
            value: '',
            required: false,
            order: 17
          }),

          // 18. Estimated Protein intake per day?
          new TextQuestion({
            key: 'What is your estimated Protein intake per day?',
            label: 'What is your estimated Protein intake per day?',
            value: '',
            required: false,
            order: 18
          }),



            // new SelectQuestion({
            //     key: 'My Select DropDown Question',
            //     label: 'Select Label',
            //     options: [
            //       {key: 'opt1',  value: 'Opt1'},
            //       {key: 'opt2',  value: 'Opt2'},
            //       {key: 'opt3',   value: 'Opt3'},
            //       {key: 'opt4', value: 'Opt4'}
            //     ],
            //     order: 1
            //   }),

            //   new TextQuestion({
            //     key: 'My Text Question',
            //     label: 'Text Question label',
            //     value: 'Default value is Excercise',
            //     required: true,
            //     order: 2
            //   }),

            //   new RadioQuestion({
            //     key: 'My Radio  Question',
            //     label: 'Radio Label',
            //     options: [
            //       {key: 'opt1',  value: 'Opt1'},
            //       {key: 'opt2',  value: 'Opt2'},
            //       {key: 'opt3',   value: 'Opt3'},
            //       {key: 'opt4', value: 'Opt4'}
            //     ],
            //     order: 3
            //   }),

            //   new CheckboxQuestion({
            //     key: 'My Checkbox Question',
            //     label: 'Checkbox Label',
            //     options: [
            //       {key: 'opt1',  value: 'Opt1'},
            //       {key: 'opt2',  value: 'Opt2'},
            //       {key: 'opt3',   value: 'Opt3'},
            //       {key: 'opt4', value: 'Opt4'}
            //     ],
            //     order: 4
            //   })
        ];

        let answers = this.loadAnswersOfCurrentUser();
        if (answers) {
          questions.forEach(q => {
            answers.forEach(ans => {
              if (q.key == ans.key) {
                q.ans = ans.value;
              }
            })
          })
        }

        // return of(questions.sort((a, b) => a.order - b.order));
        return of(questions);
    }

}