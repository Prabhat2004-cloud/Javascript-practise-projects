function Zodiac(day, month) {
  if ((month === 1 && day <= 19) || (month === 12 && day >= 22)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  return "Sagittarius";
}

const compliments = [
  "You're doing great",
  "You're smarter than you think",
  "You have a calm energy",
  "You're very dependable",
  "You explain things really well",
  "You're learning fast",
  "You have good taste",
  "You're more capable than you realize",
  "You're a problem solver",
  "You have a strong mindset",
  "You're improving every day",
  "You're easy to talk to",
  "You're very focused",
  "You handle pressure well",
  "You're creative in your own way",
  "You're good at what you do",
  "You're patient and thoughtful",
  "You bring positive energy",
  "You're reliable",
  "You have sharp thinking",
  "You're confident even when you don't show it",
  "You're disciplined",
  "You're a quick learner",
  "You're consistent",
  "You make things better",
  "You're doing meaningful work",
  "You're strong minded",
  "You're growing steadily",
  "You're on the right path",
  "You're more impressive than you know",
  "You're enough just as you are"
];

const victimCardCompliments = [
  "I always give my best but no one notices",
  "I try so hard but things never work out for me",
  "People often misunderstand my intentions",
  "I do everything for others and get nothing back",
  "I never get the credit I deserve",
  "Bad things always happen to me",
  "I care more than most people do",
  "I am the one who always adjusts",
  "No one understands how much I sacrifice",
  "I am always there for others but no one is there for me",
  "I stay quiet even when I am hurt",
  "I forgive easily even when I should not",
  "I put others first even at my own cost",
  "People take advantage of my kindness",
  "I do not complain I just endure",
  "I expect less that is why I get hurt",
  "I give chances even when I should not",
  "I suffer silently most of the time",
  "I try to keep everyone happy",
  "I never ask for much just understanding"
];
const recommendations = [
  "Focus on what you can control",
  "Set clear boundaries with people",
  "Take breaks when you feel overwhelmed",
  "Communicate your needs clearly",
  "Do not ignore your own feelings",
  "Value your time and energy",
  "Learn to say no when needed",
  "Stop expecting validation from everyone",
  "Take care of your mental health",
  "Trust actions more than words",
  "Do not over explain yourself",
  "Prioritize your personal growth",
  "Let go of what drains you",
  "Choose peace over arguments",
  "Work consistently on your goals",
  "Accept that not everyone will understand you",
  "Focus on progress not perfection",
  "Surround yourself with supportive people",
  "Be patient with yourself",
  "Keep moving forward step by step"
];

const predictions = [
  "A positive change is coming your way",
  "You will gain clarity about an important decision",
  "Hard work will start showing results soon",
  "An old problem will finally get resolved",
  "You may receive good news unexpectedly",
  "A new opportunity will open up for you",
  "Your confidence will grow steadily",
  "Someone will appreciate your efforts",
  "Financial stability will improve gradually",
  "You will feel more mentally strong",
  "A meaningful conversation will change your perspective",
  "Your patience will be rewarded",
  "You will overcome a current challenge",
  "Better days are ahead for you",
  "You will feel more balanced and calm",
  "A fresh start is near",
  "Your skills will help you move forward",
  "You will gain support from the right people",
  "Your consistency will bring success",
  "You are moving in the right direction"
];

const form=document.querySelector("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name= document.getElementById("name").value
    const surname=document.getElementById("surname").value
    const day=parseInt(document.getElementById("day").value)
    const month=parseInt(document.getElementById("month").value)
    const year=parseInt(document.getElementById("year").value)

    const text=`Hi ${name} ${surname},your zodiac sign is ${Zodiac(day,month)}.
    ${compliments[day-1]}. ${victimCardCompliments[day%20]}. ${recommendations[year%20]}. ${predictions[(day*month)%20]}`
    document.getElementById("result").textContent=text;
    
    form.reset()

    
})