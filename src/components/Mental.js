import brain from '../assets/brain.jpg'
import think from '../assets/think.jpg'
import comunity from '../assets/comunity.png'
import mind from '../assets/mind.jpg'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter-sign.png'
import '../App.css';

function Mental() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="definition">

          <div className="pars">
            <h1>What Is Mental Health?</h1>
              <p>Mental health includes our emotional, psychological, and social well-being. 
                It affects how we think, feel, and act. It also helps determine how we handle stress,
                relate to others, and make choices. Mental health is important at every stage of life,
                from childhood and adolescence through adulthood.</p>
          </div>

          <img src={brain}/>
        </div>

        <div className="definition">
            <img src={think}/>
            <div className="pars">
            <h1>Mental Health Disorders</h1>
              <p>Common mental health disorders
              The most common types of mental illness are as follows:

              <ul><li>Anxiety disorders</li>
                <li>Mood disorders</li>
                <li>Schizophrenia disorders</li>
              </ul>
                </p>
            </div>
          </div>

          <div className="signs">
            <h1>Early Signs</h1>
            <p>There is no physical test or scan that reliably indicates whether a person has developed 
              a mental illness. However, people should look out for the following as possible signs 
              of a mental health disorder:</p>
              <ul>
                <li>Withdrawing from friends, family, and colleagues</li>
                <li>Avoiding activities that they would normally enjoy</li>
                <li>Sleeping too much or too little</li>
                <li>Eating too much or too little</li>
                <li>Feeling hopeless</li>
                <li>Having consistently low energy</li>
                <li>Using mood-altering substances, including alcohol and nicotine, more frequently</li>
                <li>Displaying negative emotions</li>
                <li>Being confused</li>
                <li>Being unable to complete daily tasks, such as getting to work or cooking a meal</li>
                <li>Having persistent thoughts or memories that reappear regularly</li>
                <li>Thinking of causing physical harm to themselves or others</li>
                <li>Hearing voices</li>
                <li>Experiencing delusions</li>
              </ul>
          </div>

          <div className="definition">

          <div className="pars">
            <h1>Mental Health And Wellness</h1>
              <p>Positive mental health allows people to:
                <ul>
                  <li>Realize their full potential</li>
                  <li>Cope with the stresses of life</li>
                  <li>Work productively</li>
                  <li>Make meaningful contributions to their communities</li>
                </ul>
              </p>
          </div>

          <img src={mind}/>
        </div>

        <div className="definition">
            <img src={comunity}/>
            <div className="pars">
            <h1>Ways To Maintain Positive Mental Health</h1>
              <p>
                <ul>
                  <li>Getting professional help if you need it</li>
                  <li>Connecting with others</li>
                  <li>Staying positive</li>
                  <li>Getting physically active</li>
                  <li>Helping others</li>
                  <li>Getting enough sleep</li>
                  <li>Developing coping skills</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="video">
            <p>Watch Our Video About Mental Health</p>
          <iframe width="753" height="400" src="https://www.youtube.com/embed/AUWhdmKyOE8" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture" allowfullscreen></iframe></div>

          <div className="footer">
            <p><a href="https://www.cdc.gov/hrqol/wellbeing.htm?fbclid=IwAR2oI_V2Z0O1WDXCeXh23gRsHwH8BN-
            -lKLU-cMV15c3cU21luGr69pCr2o" target="_blank">Learn More </a> 
            About Mental Health OR Contact Us On:</p>
            <div className="icons">
              <a href="https://www.facebook.com/" target="_blank"><img src={facebook}/></a>
              <a href="https://www.instagram.com/" target="_blank"><img src={instagram}/></a>
              <a href="https://www.twitter.com/" target="_blank"><img src={twitter}/></a>
            </div>
          </div>

      </header>
    </div>
  );
}

export default Mental;