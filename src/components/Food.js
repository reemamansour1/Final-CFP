import main from '../assets/main.jpg'
import lunch from '../assets/lunch.jpg'
import fruits from '../assets/fruits.jpg'
import food from '../assets/food.jpeg'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter-sign.png'

import '../App.css';
import './Food.css';

function Food() {
  return (
    <div className="App">
      <header className="App-header">
​
        <div className="Start">
​
          <div className="par">
            <h1>What Is Healthy Food?</h1>
              <p>Healthy eating means eating a variety of foods that give you the nutrients you need to maintain your health, feel good, and have energy. These nutrients include protein, carbohydrates, fat, water, vitamins, and minerals.</p>
              <h1>8 Tips For Healthy Eating</h1>
              <ul className = 'black'>
                <li>Base your meals on higher fibre starchy carbohydrates</li>
                <li>Eat lots of fruit and veg</li>
                <li>Eat more fish, including a portion of oily fish</li>
                <li>Cut down on saturated fat and sugar</li>
                <li>Eat less salt: no more than 6g a day for adults</li>
                <li>Get active and be a healthy weight</li>
                <li>Do not get thirsty</li>
                <li> Do not skip breakfast</li>
              </ul>
​
​
          </div>
​
          <img src={main}/>
        </div>
​
        <div className="Start">
            <img src={food}/>
            <div className="par">
            <h1>The Basics Of A Healthy Breakfast</h1>
            <ul className = 'black'>
            <li>Whole grains Examples include whole-grain rolls and bagels, hot or cold whole-grain cereals, whole-grain English muffins, and whole-grain waffles.</li>
            <li>Lean protein Examples include eggs, lean meat, legumes and nuts.</li>
            <li>Low-fat dairy.</li>
            <li>Fruits and vegetables.</li>
            </ul>
            </div>
          </div>
​
          <div className="Benefits">
            <h1>Why is it <strong>Important</strong> to eat Healthy Food </h1>
            <p>There are a lot of benefits of eating healthy food . The most Important ones ARE:</p>
              <ul className = 'uls'>
              
               <li> Weight Loss. One of the main reasons people eat a healthy diet is to maintain a healthy weight or to lose weight</li>
               <li>Heart Health</li>
               <li>Strong bones and teeth</li>
               <li>Better mood and energy levels</li>
               <li>Improved memory and brain health.</li>
              
              </ul>
          </div>
​
          <div className="Start">
​
          <div className="par">
            <h1>Healthy People Usually Eat These Things for Lunch</h1>
                <ul className = 'black'>
                  <li>Avocado and egg sandwich with Green Salad</li>
                  <li>Protein Salad</li>
                  <li>Loaded Vegetable Sandwich.</li>
                  <li>Chicken burrito bowl with rice and beans.</li>
                </ul>
  
          </div>
​
          <img src={lunch}/>
        </div>
​
        <div className="Start">
            <img src={fruits}/>
            <div className="par">
            <h1>Ways To Eat Healthy Dinner At Night</h1>
                <ul className = 'black'>
                  <li>Avoid sugary drinks and instead drink water</li>
                  <li>Eat fruits like : Banana , apple , orange</li>
                  <li>Make a very light Salad</li>
                  <li>Drink A cup of MILK</li>
                </ul>
              
            </div>
          </div>
​
<div className="video">
            <p>Watch Our Video About Healthy Food</p>
            <iframe width="699" height="393" src="https://www.youtube.com/embed/rNuqNdJd54E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>

          <div className="footer">
            <p><a href="https://www.morelandobgyn.com/blog/womens-nutrition-what-is-considered-healthy-food" target="_blank">Learn More </a> 
            About Healthy Food OR Contact Us On: </p>
            <div className="icons">
              <a href="https://www.facebook.com/" target="_blank"><img src={facebook}/></a>
              <a href="https://www.instagram.com/" target="_blank"><img src={instagram}/></a>
              <a href="https://www.twitter.com/" target="_blank"><img src={twitter}/></a>
            </div>
          </div>
​
      </header>
    </div>
  );
}

export default Food;