var quotes = [
    "You re off to great places, today is your day. Your mountain is waiting, so get on your way",
    "You always pass failure on the way to success" ,
    "If you want to achieve greatness stop asking for permission",
    "Things work out best for those who make the best of how things work out",
    "To live a creative life, we must lose our fear of being wrong",
    "If you are not willing to risk the usual you will have to settle for the ordinary",
    "Trust because you are willing to accept the risk, not because it's safe or certain",
    "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    "All our dreams can come true if we have the courage to pursue them",
    "Good things come to people who wait, but better things come to those who go out and get them",
    "If you do what you always did, you will get what you always got",
    "Success is walking from failure to failure with no loss of enthusiasm",
    "Just when the caterpillar thought the world was ending, he turned into a butterfly",
    "The distance between insanity and genius is measured only by success",
    "When you stop chasing the wrong things, you give the right things a chance to catch you",
    "I believe that the only courage anybody ever needs is the courage to follow your own dreams",
    "No masterpiece was ever created by a lazy artist",
    "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
    "If you can't explain it simply, you don't understand it well enough",
    "Blessed are those who can give without remembering and take without forgetting",
    "Do one thing every day that scares you",
    "You can do anything, but not everything",
    "Innovation distinguishes between a leader and a follower." ,
    "Only put off until tomorrow what you are willing to die having left undone",
    "The function of leadership is to produce more leaders, not more followers",
]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quototo').textContent = quotes[randomNumber];
}