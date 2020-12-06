import { Injectable } from '@angular/core';
import { ExerciseCard } from 'app/exercise-card/exercise-card';

@Injectable({
  providedIn: 'root'
})
export class DashboardExercisesService {

  monExercises: Array<ExerciseCard> = [];
  tueExercises: Array<ExerciseCard> = [];
  wedExercises: Array<ExerciseCard> = [];
  thuExercises: Array<ExerciseCard> = [];
  friExercises: Array<ExerciseCard> = [];
  satExercises: Array<ExerciseCard> = [];
  sunExercises: Array<ExerciseCard> = [];
  allYogaExercises: Array<ExerciseCard> = [];
  allExercises: Array<ExerciseCard> = [];
  
  constructor() {
    this.initExercise();
   }

  initExercise() {    
    this.monExercises = this.getMonExercise();
    this.tueExercises = this.getTueExercise();
    // this.wedExercises = this.getWedExercise();
    this.thuExercises = this.getThuExercise();
    this.friExercises = this.getFriExercise();
    this.satExercises = this.getSatExercise();
    // this.sunExercises = this.getSunExercise();
    this.allYogaExercises = this.getYogaExercise();
    this.allExercises = this.getAllExercise();
  }

  getAllExercise(): ExerciseCard[] {
    let fetchExercises: Array<ExerciseCard> = [];

    fetchExercises = fetchExercises.concat(this.monExercises);
    fetchExercises = fetchExercises.concat(this.tueExercises);
    fetchExercises = fetchExercises.concat(this.wedExercises);
    fetchExercises = fetchExercises.concat(this.thuExercises);
    fetchExercises = fetchExercises.concat(this.friExercises);
    fetchExercises = fetchExercises.concat(this.satExercises);
    fetchExercises = fetchExercises.concat(this.sunExercises);
    fetchExercises = fetchExercises.concat(this.allYogaExercises);
    return fetchExercises;
  }

  getYogaExercise(): ExerciseCard[] {

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
    exe3.img="assets/images/yoga/exe3.jpg";
    exe3.isAdmin = false;
    exe3.isGymRequired = false;

    let exe4: ExerciseCard = new ExerciseCard();
    exe4.name = "Tree";
    exe4.content = "Tree is an awesome standing balance for beginners to work on to gain focus and clarity and learn to breathe while standing and keeping the body balanced on one foot. Start with your feet together and place your right foot on your inner left upper thigh. Press your hands in prayer and find a spot in front of you that you can hold in a steady gaze. Hold and breathe for 8-10 breaths then switch sides. Make sure you don’t lean into the standing leg and keep your abdominals engaged and shoulders relaxed.";
    exe4.img="assets/images/yoga/exe4.jpg";
    exe4.isAdmin = false;
    exe4.isGymRequired = false;

    let exe5: ExerciseCard = new ExerciseCard();
    exe5.name = "Child's Pose";
    exe5.content = "Everyone needs a good resting pose and Child’s pose is an awesome one not just for beginners but for yoga practitioners of all levels. It’s good to learn child’s pose to use when you’re fatigued in Down Dog, before bed at night to work out the kinks, or anytime you need a mental break and stress/tension relief. Start on all fours then bring your knees and feet together as you sit your butt back to your heels and stretch your arms forward. Lower your forehead to the floor (or block or pillow or blanket) and let your entire body release. Hold for as long as you wish! ";
    exe5.img="assets/images/yoga/exe5.gif";
    exe5.isAdmin = false;
    exe5.isGymRequired = false;

    fetchExercises.push(exe1);
    fetchExercises.push(exe2);
    fetchExercises.push(exe3);
    fetchExercises.push(exe4);
    fetchExercises.push(exe5);

    return fetchExercises;
  }

  getMonExercise(): ExerciseCard[] {

    let fetchExercises: Array<ExerciseCard> = [];

    let exe1: ExerciseCard = new ExerciseCard(); 
    exe1.name = "Decline Dumbbell Bench Press with Rotation"; 
    exe1.content = "Lay back on a decline bench with dumbbells raised over your chest, hands rotated out and positioned to make a 'V.' Lower the weights down towards your armpits slowly. As you lower, rotate the elbows inward towards each other to create an “A,” bringing each dumbbell just above the space between your pec and shoulder. Slowly press both arms back up towards the starting position and carefully rotate both arms outwardly until you return to the starting position. Complete 4 to 5 sets of 8 to 12 reps with medium to heavy weight.";
    exe1.img="assets/images/gym/mon/exe1.jpg";
    exe1.isAdmin = false;
    exe1.isGymRequired = true;

    let exe2: ExerciseCard = new ExerciseCard(); 
    exe2.name = "Bodyweight Hanging Dips"; 
    exe2.content = "Hold yourself up between two bars that are slightly wider than hip-width apart, arms straight but not locked out, and feet off the floor. To lower yourself down, bend the elbows, stopping at a 90-degree angle in your elbows while keeping your core tight. Without swinging, press down through the hands and raise the body up to the starting position. Complete 2 to 3 sets of 12 to 15 reps using a 3-second slow up and down tempo."; 
    exe2.img="assets/images/gym/mon/exe2.jpg";
    exe2.isAdmin = false;
    exe2.isGymRequired = true;

    let exe3: ExerciseCard = new ExerciseCard(); 
    exe3.name = "Decline Bench Dumbbell Chest Flys"; 
    exe3.content = "Lay back on a decline bench with one dumbbell in each hand raised straight over your chest. With a flat back on the bench and a soft bend in both elbows, slowly lower the arms out to the sides. Only go as wide as you can with putting too much stress on your shoulders, and do not let your elbows go lower than your chest. Focus on squeezing your pecs. Brace the core, keeping the back down on the bench without arching, while squeezing the pecs, and press the dumbbells back up over the chest to their starting position. Complete 2 to 3 sets of 15 to 20 reps with a medium to heavy weight."; 
    exe3.img="assets/images/gym/mon/exe3.jpg";
    exe3.isAdmin = false;
    exe3.isGymRequired = true;

    let exe4: ExerciseCard = new ExerciseCard(); 
    exe4.name = "Cable Chest Fly"; 
    exe4.content = "Stand with one foot forward and one foot back while holding both cables in each hand. With a soft bend in both elbows, bring your arms together in front of the body, lightly touching your fingertips. When your fingers touch, squeeze your pecs together as hard as you can, then alternate opening and closing your arms in a pulsing motion, quickly focusing just on the chest. Squeeze for 20 reps. Slowly release the arms out wide, back to their starting position and rest. Complete 5 sets of 20 reps at medium weight."; 
    exe4.img="assets/images/gym/mon/exe4.jpg";
    exe4.isAdmin = false;
    exe4.isGymRequired = true;

    let exe5: ExerciseCard = new ExerciseCard(); 
    exe5.name = "Push Ups"; 
    exe5.content = "No equipment at home and no time for gym visits? No problem. The ordinary pushup provides 61 percent chest muscle activation. That’s significantly less than the bench press, but pushups offer convenience and triple the muscle-building benefits: they strengthen your chest, arms, and shoulders. Tighten your abdominals, keep your back flat, your neck in alignment with your spine, and keep your elbows close to your sides. With your hands directly under your shoulders, lower yourself slowly and with control. Lastly, press up."; 
    exe5.img="assets/images/gym/mon/exe5.png";
    exe5.isAdmin = false;
    exe5.isGymRequired = true;
    
    fetchExercises.push(exe1);
    fetchExercises.push(exe2);
    fetchExercises.push(exe3);
    fetchExercises.push(exe4);
    fetchExercises.push(exe5);

    return fetchExercises;
  }

  getTueExercise(): ExerciseCard[] {

    let fetchExercises: Array<ExerciseCard> = [];

    let exe1: ExerciseCard = new ExerciseCard(); 
    exe1.name = "Lat Pulldown"; 
    exe1.content = "If you’re using a machine, position the pad so it’s touching your thighs. Stand up and grab the bar wider than shoulder-width apart, sitting back down. Begin to pull the bar down toward your chest, bending your elbows and directing them down to the ground. Engage your upper and mid back throughout this whole movement. Keep your torso straight, not allowing yourself to fall backward. Complete 3 sets of 12 reps."; 
    exe1.img="assets/images/gym/tue/exe1.png";
    exe1.isAdmin = false;

    let exe2: ExerciseCard = new ExerciseCard(); 
    exe2.name = "Wide Dumbbell Row"; 
    exe2.content = "Hold a dumbbell in each hand and hinge at the waist, stopping when your upper body forms a 20-degree angle with the ground. Your palms should be facing your thighs, and your neck should remain neutral. Allow the dumbbells to hang down in front of you. Begin to row with your elbows at a 90-degree angle, pulling them up toward the sky. Squeeze your shoulder blades together at the top. Return to start and repeat, completing 3 sets of 12 reps."; 
    exe2.img="assets/images/gym/tue/exe2.jpg";
    exe2.isAdmin = false;

    let exe3: ExerciseCard = new ExerciseCard(); 
    exe3.name = "Good Morning"; 
    exe3.content = "If using weight, safely mount a barbell on your shoulders behind your head. Position your feet shoulder-width apart. Hinging at your hips, soften your knees and drop your torso toward the ground, stopping when it’s parallel. Your back should remain straight throughout this movement. Once you reach parallel, push through your feet and return to start. Complete 3 sets of 12 reps."; 
    exe3.img="assets/images/gym/tue/exe3.png";
    exe3.isAdmin = false;

    let exe4: ExerciseCard = new ExerciseCard(); 
    exe4.name = "Wood Chop"; 
    exe4.content = "Grab the dumbbell or medicine ball with both hands. Hold it above your head with your arms extended. Pivot on your right foot slightly so your hips are rotated. As you begin to squat down, rotate your hips to the left and bring the dumbbell or ball down to the outside of your left knee in a sweeping movement. On the ascent, twist your trunk back toward the right and, keeping your arms straight, bring the dumbbell or ball back up above the right side of your head in an explosive but controlled movement. This movement should mimic a chopping motion, hence the name. Complete 12 reps on each side for 3 sets total."; 
    exe4.img="assets/images/gym/tue/exe4.jpg";
    exe4.isAdmin = false;

    let exe5: ExerciseCard = new ExerciseCard(); 
    exe5.name = "Pull Ups"; 
    exe5.content = "Stand underneath a pullup bar and grab it with an overhand grip, placing your hands wider than shoulder-width apart. Lift your feet off the ground — or place them in the assist band — and hang from your arms, then pull your body up to the bar by bending your arms and pulling your elbows toward the ground. Once your chin crosses over the bar, extend your arms to lower your body back down. Complete 3 sets of 10 reps."; 
    exe5.img="assets/images/gym/tue/exe5.jpg";
    exe5.isAdmin = false;

    fetchExercises.push(exe1);
    fetchExercises.push(exe2);
    fetchExercises.push(exe3);
    fetchExercises.push(exe4);
    fetchExercises.push(exe5);
    return fetchExercises;
  }

  getThuExercise(): ExerciseCard[] {

    let fetchExercises: Array<ExerciseCard> = [];

    let exe1: ExerciseCard = new ExerciseCard(); 
    exe1.name = "Dumbbell Preacher Curl"; 
    exe1.content = "The beloved preacher curl, the perfect exercise for isolating the biceps brachii. This exercise is well known as the ez bar preacher curl, however switching out the bar for dumbbells allows for unilateral conditioning, ensuring both arms are as strong as each other. Utilising the preacher curl bench (or an incline bench) with dumbbells creates one of the best biceps exercises for targeting the muscle, reducing the ability to 'cheat' whilst placing more emphasis on the contraction of the muscle throughout the movement. TIP: Rotate your grip for a preacher hammer curl, giving the same amount of isolation, with more focus on the forearm, Brachialis and Brachioradialis."; 
    exe1.img="assets/images/gym/thurs/exe1.jpg";
    exe1.isAdmin = false;

    let exe2: ExerciseCard = new ExerciseCard(); 
    exe2.name = "Cable Bicep Curl"; 
    exe2.content = "Cable bicep exercises can often be overlooked for the more favorable barbell or dumbbell variations, but you don't need to fall into that same trap. The Cable Bicep Curl is essential for increasing training volume in your arm workouts, often used towards the end of sessions with a higher repetition focus. Using the cables for bicep curls creates a 'constant tension' environment for the biceps, making them work uniquely compared to the traditional methods. TIP: The cable machine can be great for drop sets and working to failure, with the weight pin system making it quick and simple to alter resistance."; 
    exe2.img="assets/images/gym/thurs/exe2.jpg";
    exe2.isAdmin = false;

    let exe3: ExerciseCard = new ExerciseCard(); 
    exe3.name = "Skull Crusher"; 
    exe3.content = "Otherwise known as the Lying Triceps Extension; If you're chasing big triceps, the skull crusher exercise should be near the top of your list. This triceps exercise is usually performed with the barbell or ez bar, allowing both triceps to work together, targeting all three heads of the triceps brachii. Focus on the slow eccentric movement, before powerfully extending your arms, engaging the triceps throughout the exercise. TIP: Don't drop the weight; else you'll find out why this exercise is called the 'skull crusher'."; 
    exe3.img="assets/images/gym/thurs/exe3.jpg";
    exe3.isAdmin = false;

    let exe4: ExerciseCard = new ExerciseCard(); 
    exe4.name = "Cable Triceps Pushdowns"; 
    exe4.content = "Utilizing the cable machine isn't just for bicep exercises... mounting the attachment higher on the frame allows for an abundance of cable triceps extension exercises to be performed. Helping isolate the triceps brachii, the Cable Triceps Pushdown using the straight bar attachment targets the three heads of the triceps. The Cable Extension is a great tool for beginners before moving on to more demanding exercises, helping develop muscular conditioning and strength. Experienced lifters can also take advantage of the cable system, isolating key areas of the triceps through different triceps extension attachments, including single arm triceps exercises. TIP: A strict posture is key to isolating the triceps effectively. Position yourself with a balanced stance, soft knees and retracted shoulders; keeping your elbows pinned by your side throughout the movement."; 
    exe4.img="assets/images/gym/thurs/exe4.png";
    exe4.isAdmin = false;

    let exe5: ExerciseCard = new ExerciseCard(); 
    exe5.name = "Single-Arm Dumbbell Overhead Tricep Extension"; 
    exe5.content = "This exercise provides a unique way to isolate the tricep, lifting the arm above the head to stretch the long head of the muscle placing more emphasis on the contraction. You'll need to leave your ego at the door for this lift. The single-arm overhead extension the weight you can shift will be limited, but that doesn't reduce its effectiveness. Start with a light weight and build your way up as your stability, and strength improves. Rest assured, this is one of the best dumbbell exercises for triceps to help isolate and target the three heads of the muscle. TIP: When standing, ensure you are contracting your abs to hold your body still and prevent your lower back from arching. "; 
    exe5.img="assets/images/gym/thurs/exe5.jpg";
    exe5.isAdmin = false;

    fetchExercises.push(exe1);
    fetchExercises.push(exe2);
    fetchExercises.push(exe3);
    fetchExercises.push(exe4);
    fetchExercises.push(exe5);
    return fetchExercises;
  }

  getFriExercise(): ExerciseCard[] {

    let fetchExercises: Array<ExerciseCard> = [];

    let exe1: ExerciseCard = new ExerciseCard(); 
    exe1.name = "Front Squats"; 
    exe1.content = "You were probably expecting the back squat to sit in prime position, but the front squat is ideal for specifically targeting the quadriceps (thighs). While still hitting the other muscle groups in your legs, the front squats anterior (front) bar position means the quads are recruited more to complete each rep. The front squat also replicates more advanced movements such as the snatch and clean & press, helping develop full-body strength Olympic lift progression. Although loading the bar on the front can feel uncomfortable to begin with, it reduces pressure on the spine, engages the core well and can also help promote better squat form. TIP: If you don't have the wrist flexibility for a traditional clean and press front squat grip, try the crossed arm approach; loading the bar from a rack with hands resting on the opposite shoulder."; 
    exe1.img="assets/images/gym/fri/exe1.png";
    exe1.isAdmin = false;

    let exe2: ExerciseCard = new ExerciseCard(); 
    exe2.name = "Romanian Deadlift"; 
    exe2.content = "Otherwise known as the Stiff-Legged Deadlift or RDL, this exercise is a fundamental exercise for both the hamstrings and posterior chain in general. The Romanian Deadlift allows for a significant load to be placed upon the hamstrings, recruiting the glutes and erector spinae to assist in the movement. Utilising a bar or dumbbell will allow for plenty of volume to be put through these key muscle groups, essential for muscular development and conditioning. TIP: Your knees should have a slight bend during this movement, keeping your shoulders (scapula) retracted and your chest proud. Keeping your upper torso in a strict position, with arms working like hooks, will allow you to focus on the contraction in the muscle groups you're targeting."; 
    exe2.img="assets/images/gym/fri/exe2.png";
    exe2.isAdmin = false;

    let exe3: ExerciseCard = new ExerciseCard(); 
    exe3.name = "Split Squats"; 
    exe3.content = "Single leg exercises are a fantastic way to develop muscle growth, balance and coordination, and the split squat is no different. Muscular imbalances are natural and can be more prominent in lifters who mainly stick to barbell-based lifts. The split squat places a significant emphasis on the contraction of the quadriceps, whilst also engaging the glutes and calves (gastrocnemius) for stability. Weights can be added to increase difficulty; dumbbell split squats can be better for beginners to develop balance whilst barbell split squats can help increase weight and volume to the exercise. TIP: When performing the exercises, keep an upright torso and lower the hips towards the ground on the eccentric motion of the split squat, rather than leaning forward. A rear foot elevated split squat can also be performed to increase difficulty."; 
    exe3.img="assets/images/gym/fri/exe3.png";
    exe3.isAdmin = false;

    let exe4: ExerciseCard = new ExerciseCard(); 
    exe4.name = "Glute Bridge"; 
    exe4.content = "If you're dreaming of heavy squats and powerful deadlifts, the Glute Bridge is a must for your training programme. Engaging and utilising this huge muscle group will pay dividends in your bigger lifts, and getting this one right from the get-go will help you quickly develop onto a Weighted Glute Bridge. Contracting your glutes and hamstrings to lift your hips off the ground may sound easy, but once you start incorporating more time under tension and loading weight, this soon becomes an area of rapid development and power. TIP: To get the right angle, aim for your ankle to be directly below your knee. During the movement, push your heels into the ground and contract your hamstring and butt. Perform each rep in a controlled manner for maximum effect."; 
    exe4.img="assets/images/gym/fri/exe4.png";
    exe4.isAdmin = false;

    let exe5: ExerciseCard = new ExerciseCard(); 
    exe5.name = "Single-Leg Romanian Deadlift"; 
    exe5.content = "Also known as Single-Leg RDL's, they put the key emphasis on your hamstrings and glutes, the Single-Leg Romanian Deadlift will soon have your muscles firing on all cylinders. Testing not only the muscular contraction and strength endurance, but also your balance and posture. TIP: Start with a light weight and focus on keeping your shoulders retracted throughout the exercise, controlling the movement slowly on the way down. On the way back up, push your heel into the ground, contracting your hamstrings and glutes to bring your torso back up to a vertical position."; 
    exe5.img="assets/images/gym/fri/exe5.png";
    exe5.isAdmin = false;

    fetchExercises.push(exe1);
    fetchExercises.push(exe2);
    fetchExercises.push(exe3);
    fetchExercises.push(exe4);
    fetchExercises.push(exe5);
    
    return fetchExercises;
  }

  getSatExercise(): ExerciseCard[] {

    let fetchExercises: Array<ExerciseCard> = [];

    let exe1: ExerciseCard = new ExerciseCard(); 
    exe1.name = "Barbell Overhead Shoulder Press"; 
    exe1.content = "A barbell overhead shoulder press (aka barbell standing shoulder press) works not just your shoulders, but most of your body. That makes it a terrific core strengthener and mass builder, among other things. To start, put your feet at shoulder-width, and tighten your core as you hold a barbell at your shoulders, palms facing forward. Next, push the bar upward and squeeze your shoulder blades together at the peak. Lower steadily and carefully."; 
    exe1.img="assets/images/gym/sat/exe1.gif";
    exe1.isAdmin = false;

    let exe2: ExerciseCard = new ExerciseCard(); 
    exe2.name = "Bent-Over Dumbbell Lateral Raise"; 
    exe2.content = "This wildly effective shoulder exercise targets your middle deltoids, though it also builds upon your overall physique. You can perform it in either a standing (bent over) or seated position. Start with a dumbbell in each hand, keeping your chest up, your back flat, your knees slightly bent, and your eyes focused toward a fixed point on the floor. Now, bend over until your core is basically parallel with the ground, and hang the dumbbells directly underneath you, all while keeping your elbows in a slightly bent position. Next, raise both dumbbells up and out to your sides, forming an arc until your upper arms are even with your torso. Take a brief pause at the top before lowering the dumbbells back into starting position. Repeat."; 
    exe2.img="assets/images/gym/sat/exe2.gif";
    exe2.isAdmin = false;

    let exe3: ExerciseCard = new ExerciseCard(); 
    exe3.name = "Dumbbell Lateral Raise"; 
    exe3.content = "If you prefer a more traditional lateral raise, look no further than this one here. It likewise targets the middle deltoids and works wonders when executed properly. Start in the standing position, keeping your feet shoulder-width apart, your abs tight, your chest up, your head straight, and your shoulders pinched. Hold the dumbbells at either side, retaining a neutral grip. Now, here comes the hard part. Using just your shoulders and arms, raise the dumbbells a notch above shoulder level, and hold for a few seconds. Lower the dumbbells back to the starting position, and repeat. Your elbows and hands should be moving together in harmony the entire time, and you should be maintaining a neutral, balanced position. If you find that your core or neck is shifting as you perform each rep (i.e. you’re utilizing your body’s momentum), lower the weight accordingly."; 
    exe3.img="assets/images/gym/sat/exe3.jpg";
    exe3.isAdmin = false;

    let exe4: ExerciseCard = new ExerciseCard(); 
    exe4.name = "One-Arm Cable Lateral Raise"; 
    exe4.content = "This shoulder exercise targets the middle deltoid muscles and delivers ample tension. To start, stand sideways to the cable machine, keeping your feet shoulder-width apart. Using the hand that’s opposite the pulley, grab the D-handle. With your abs tight and your shoulders back, raise the cable using just the motion of your arms and shoulders. Take your arm just past shoulder level and hold for a few seconds before slowly returning to the original position. Repeat as necessary and then switch sides. Your hand and elbow should move in conjunction with one another the entire time."; 
    exe4.img="assets/images/gym/sat/exe4.jpg";
    exe4.isAdmin = false;

    let exe5: ExerciseCard = new ExerciseCard(); 
    exe5.name = "Seated Dumbbell Shouder Press"; 
    exe5.content = "A proper deltoid workout simply isn’t complete without the seated dumbbell shoulder press. In fact, some say this exercise routine is an entire deltoid regimen unto itself, targeting the anterior, lateral, and posterior deltoid muscles (with an emphasis on the middle delts). Meanwhile, lifting two separate dumbbells (as opposed to using a machine) prevents you from using one side of your body over the other, thereby retaining firmer balance and distribution. Naturally, a fair amount of coordination is required to pull this one off, especially when you increase the weights. To perform a seated dumbbell shoulder press, sit on a low-back bench and hold a dumbbell in each hand at the shoulder level, palms facing forward. Keeping your head and spine perfectly straight, lift the dumbbells overhead toward one another, stopping just short of having them touch at the top. Hold the position for a few seconds and then carefully reverse course. Repeat. "; 
    exe5.img="assets/images/gym/sat/exe5.gif";
    exe5.isAdmin = false;

    fetchExercises.push(exe1);
    fetchExercises.push(exe2);
    fetchExercises.push(exe3);
    fetchExercises.push(exe4);
    fetchExercises.push(exe5);
    return fetchExercises;
  }

  getExerciseList(): Array<ExerciseCard> {

    let fetchExercises: Array<ExerciseCard> = [];

    let exe1: ExerciseCard = new ExerciseCard(); 
    exe1.name = "Ab Crunch Machine"; 
    exe1.content = "Sit on the ab machine and select a slight resistance. Position your feet under the pads and grab hold of the top handles. Make sure your arms are bent at 90 degrees and rest your triceps on the pads. Begin lifting your legs up as you engage your abs and crunch your upper torso. Exhale as you do so. Pause and slowly return to starting position as you inhale."; 
    exe1.img="";
    exe1.isAdmin = false;

    let exe2: ExerciseCard = new ExerciseCard();
    exe2.name = "Bench Press";
    exe2.content = "Sit on the ab machine and select a slight resistance. Position your feet under the pads and grab hold of the top handles. Make sure your arms are bent at 90 degrees and rest your triceps on the pads. Begin lifting your legs up as you engage your abs and crunch your upper torso. Exhale as you do so. Pause and slowly return to starting position as you inhale.";
    exe2.img="";
    exe2.isAdmin = false;

    let exe3: ExerciseCard = new ExerciseCard();
    exe3.name = "Barbell Pullovers";
    exe3.content = "Sit on the ab machine and select a slight resistance. Position your feet under the pads and grab hold of the top handles. Make sure your arms are bent at 90 degrees and rest your triceps on the pads. Begin lifting your legs up as you engage your abs and crunch your upper torso. Exhale as you do so. Pause and slowly return to starting position as you inhale.";
    exe3.img="";
    exe3.isAdmin = false;

    let exe4: ExerciseCard = new ExerciseCard();
    exe4.name = "Kneeling Roll Extensions";
    exe4.content = "Kneel on the floor on all fours and place the ab roller in front of you. Grab hold of either end of the roller with each hand. Engage your abs and slowly roll the roller forward in a straight line until your body stretches in a straight position. Try to roll down as far as you can without touching the floor. Inhale in as you roll down. Pull yourself back to the starting position by exhaling and rolling back slowly. Maintain tight abs throughout the movement.";
    exe4.isAdmin = false;
    exe4.img="";
    fetchExercises.push(exe4);
    fetchExercises.push(exe1);
    fetchExercises.push(exe2);
    fetchExercises.push(exe3);

    return fetchExercises;
  }

}
