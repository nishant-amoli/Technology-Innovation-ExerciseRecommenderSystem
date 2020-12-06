import { Component, OnInit } from '@angular/core';
import { ExerciseCard } from '../exercise-card/exercise-card';
@Component({
  selector: 'app-no-gym-exercises',
  templateUrl: './no-gym-exercises.component.html',
  styleUrls: ['./no-gym-exercises.component.css']
})
export class NoGymExercisesComponent implements OnInit {
  exercises: Array<ExerciseCard> = [];

  constructor() { }

  ngOnInit(): void {
    this.exercises = this.getExerciseList();
    this.exercises = this.filterNoGymExercise();
    console.log(this.exercises);
  }

  filterNoGymExercise(): ExerciseCard[] {
    return this.exercises.filter(exe => {
      if(!exe.isGymRequired){
        return exe;
      }
    });
  }

  getExerciseList(): Array<ExerciseCard> {

    let fetchExercises: Array<ExerciseCard> = [];

    let exe1: ExerciseCard = new ExerciseCard();
    exe1.name = "Downward Facing Dog";
    exe1.content = "Downward Dog is used in most yoga practices and yoga classes and it stretches and strengthens the entire body. I always say, 'a down dog a day keeps the doctor away.' Come on to all fours with your wrists under your shoulders and knees under your hips. Tuck under your toes and lift your hips up off the floor as you draw them up at back towards your heels. Keep your knees slightly bent if your hamstrings are tight, otherwise try and straighten out your legs while keeping your hips back. Walk your hands forward to give yourself more length if you need to. Press firmly through your palms and rotate the inner elbows towards each other. Hollow out the abdominals and keep engaging your legs to keep the torso moving back towards the thighs. Hold for 5-8 breaths before dropping back to hands and knees to rest.";
    exe1.img="assets/images/yoga/exe1.jpg";
    exe1.isAdmin = false;
    exe1.isGymRequired = false;

    let exe2: ExerciseCard = new ExerciseCard();
    exe2.name = "Planks";
    exe2.content = "Plank teaches us how to balance on our hands while using the entire body to support us. It is a great way to strengthen the abdominals, and learn to use the breath to help us stay in a challenging pose. From all fours, tuck under your toes and lift your legs up off the mat. Slide your heels back enough until you feel you are one straight line of energy from your head to your feet. Engage the lower abdominals, draw the shoulders down and away from the ears, pull your ribs together and breathe deeply for 8-10 breaths.";
    exe2.img="assets/images/yoga/exe2.jpg";
    exe2.isAdmin = false;
    exe2.isGymRequired = false;

    let exe3: ExerciseCard = new ExerciseCard();
    exe3.name = "Triangle";
    exe3.content = "Triangle is a wonderful standing posture to stretch the sides of the waist, open up the lungs, strengthen the legs and tone the entire body. Start standing with your feet one leg's-length apart. Open and stretch your arms to the sides at shoulder height. Turn your right foot out 90 degrees and your left toes in about 45 degrees. Engage your quadriceps and abdominals as you hinge to the side over your right leg. Place your right hand down on your ankle, shin or knee (or a block if you have one) and lift your left arm up to the ceiling. Turn your gaze up to the top hand and hold for 5-8 breaths. Lift up to stand and repeat on the opposite side. Tip: I like to imagine I’m stuck between two narrow walls when I’m in triangle pose.";
    exe3.img="";
    exe3.isAdmin = false;
    exe3.isGymRequired = false;

    let exe4: ExerciseCard = new ExerciseCard();
    exe4.name = "Tree";
    exe4.content = "Tree is an awesome standing balance for beginners to work on to gain focus and clarity and learn to breathe while standing and keeping the body balanced on one foot. Start with your feet together and place your right foot on your inner left upper thigh. Press your hands in prayer and find a spot in front of you that you can hold in a steady gaze. Hold and breathe for 8-10 breaths then switch sides. Make sure you don’t lean into the standing leg and keep your abdominals engaged and shoulders relaxed.";
    exe4.img="";
    exe4.isAdmin = false;
    exe4.isGymRequired = false;

    let exe5: ExerciseCard = new ExerciseCard();
    exe5.name = "Child's Pose";
    exe5.content = "Everyone needs a good resting pose and Child’s pose is an awesome one not just for beginners but for yoga practitioners of all levels. It’s good to learn child’s pose to use when you’re fatigued in Down Dog, before bed at night to work out the kinks, or anytime you need a mental break and stress/tension relief. Start on all fours then bring your knees and feet together as you sit your butt back to your heels and stretch your arms forward. Lower your forehead to the floor (or block or pillow or blanket) and let your entire body release. Hold for as long as you wish! ";
    exe5.img="";
    exe5.isAdmin = false;
    exe5.isGymRequired = false;

    fetchExercises.push(exe1);
    fetchExercises.push(exe2);
    fetchExercises.push(exe3);
    fetchExercises.push(exe4);
    fetchExercises.push(exe5);

    return fetchExercises;
  }

}
