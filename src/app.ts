import "./normalize.css";
import "./index.css";
import register from "./register";
import Router from "./router";
window.onload = register;
let router = new Router();
router.route("/#/en", () => {
  document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Keio</title>
</head>

<body>
    <div class="dot"></div>
    <nav class="fixNav">
        <ul class="navBody">
            <li><a class="navLink" href="http://127.0.0.1:8080/">Home</a></li>
            <li>
                <a class="navLink" href="http://127.0.0.1:8080/outline">Event Outline</a>
            </li>
            <li><a class="navLink" href="http://127.0.0.1:8080/">Venus Map</a></li>
            <li class="relative">
                <a class="navLink arrow">Timetable</a>
                <div class="pre">
                    <div class="radius"><a class="hiddenNavLink" href="http://127.0.0.1:8080/timetable"> Session</a>
                        <a class="hiddenNavLink" href="http://127.0.0.1:8080/timetable"> Pitch</a>
                    </div>
                </div>
            </li>
            <li class="relative">
                <a class="navLink arrow" href="http://127.0.0.1:8080">Program</a>
                <div class="pre">
                    <div class="radius">
                        <a class="hiddenNavLink" href="http://127.0.0.1:8080/session">Exhibition List</a>
                        <a class="hiddenNavLink" href="http://127.0.0.1:8080/session">Session List</a>
                    </div>
                </div>
            </li>
            <li>
                <a href="http://127.0.0.1:8080/session/sponsor">Sponsor</a>
            </li>
        </ul>
    </nav>
    <span class="yellowBall">
        <div class="move">
            <div class="ball"></div>
            <span class="yellowBallText">KEIO SFC
OPEN RESEARCH FORUM 2018 </span>
        </div>
    </span>
    <div class="menuButton">MENU</div>
    <div class="menu">
        <div class="menuContent">
            <img  alt="">
        </div>
        <div class="menuBottom">
            <div class="menuJP">JP</div>
            <div class="menuEN">EN</div>
        </div>
    </div>
    <div class="header">
        <div class="background"><img class="headerPic" /></div>
        <div class="headerCenter">
            <span class="headerTitle">
After the
Next Societies
            </span>
            <span class="headerIntroduction">
Keio University SFC Open Research Forum 2018
ORF2018 was finished.Thank you for coming!
            </span>
        </div>
        <div class="headerRight">
            <span class="scrollDownText">SCROLL</span>
            <div class="scrollDownButton">
                <div class="scrollDownButtonHover"></div>
            </div>
        </div>
    </div>
    <div class="schedule">
        <h1 class="scheduleH">Schedule</h1>
        <div class="scheduleMain">
            <div class="scheduleLine1">
                <div class="day">DAY1</div>
                <div class="date">2018/11/22 (Thu)</div><br><br>
                <div class="scheduleItem">
                    <span class="scheduleItemF"> Exhibition</span>
                    <span class="scheduleItemS">@Hall B1F Venue・Hall A</span>
                </div>
                <div class="scheduleItem">
                    <span class="scheduleItemF"> Session</span>
                    <span class="scheduleItemS">@Tower 4F Venue</span>
                </div><br>
                <div class="date">10:00～20:00</div>
                <span class="scheduleTime">( Open 9:30)</span><br><br>
                <div class="scheduleItem">
                    <span class="scheduleItemF"> Pitch</span>
                    <span class="scheduleItemS">@Hall B1F Venue・Hall B</span>
                </div><br>
                <div class="date">10:00～19:00</div>
                <span class="scheduleTime">( Open 9:30)</span>
            </div>
            <div class="scheduleLine2">
                <div class="day">DAY1</div>
                <div class="date">2018/11/22 (Thu)</div><br><br>
                <div class="scheduleItem">
                    <span class="scheduleItemF"> Exhibition</span>
                    <span class="scheduleItemS">@Hall B1F Venue・Hall A</span>
                </div>
                <div class="scheduleItem">
                    <span class="scheduleItemF"> Session</span>
                    <span class="scheduleItemS">@Tower 4F Venue</span>
                </div><br>
                <div class="date">10:00～20:00</div>
                <span class="scheduleTime">( Open 9:30)</span><br><br>
                <div class="scheduleItem">
                    <span class="scheduleItemF"> Pitch</span>
                    <span class="scheduleItemS">@Hall B1F Venue・Hall B</span>
                </div><br>
                <div class="date">10:00～19:00</div>
                <span class="scheduleTime">( Open 9:30)</span>
            </div>
            <div class="scheduleSide">
                <img class="scheduleImage" alt="">
            </div>
        </div>
        <div class="scheduleButton">
            <div class="scheduleButtonLeft">Session Timetable</div>
            <div class="scheduleButtonRight">Pitch Timetable</div>
        </div>
        <div class="scheduleBottom">
            <div class="scheduleBottomLeft">
                <div class="scheduleBottomLeftH">Admission Fee</div>
                <div class="scheduleBottomLeftP">Free (Pre-registration NOT required)</div>
            </div>
            <div class="scheduleBottomRight">
                <div class="scheduleBottomRightH">About Reception</div>
                <div class="scheduleBottomRightP">Please stop by the general reception at the entrance of Hall B1F
                    before entering the SFC Open Research Forum 2018.</div>
            </div>
        </div>
        <div class="scheduleButtom">
            <a class="scheduleLink" href="http://127.0.0.1:8080/timetable">Session Timetable</a>
        </div>
    </div>
    <div class="venue">
        <h1 class="venueH">Venue</h1>
        <div class="venueCenter">
            <div class="venueCenterLeft">
                <h3>Exhibition</h3>
                <h2>Tokyo Midtown Hall A</h2>
                <p>(Midtown East B1F)</p>
            </div>
            <div class="venueCenterCenter">
                <h3>Session</h3>
                <h2>Tokyo Midtown</h2>
                <h2>Conference</h2>
                <p>(Midtown Tower 4F)</p>
            </div>
            <div class="venueCenterRight">
                <h3>Pitch</h3>
                <h2>Tokyo Midtown Hall B</h2>
                <p>(Midtown East B1F)</p>
            </div>
        </div>
        <div class="venueBottom">
            <div class="venueButtonLeft">Access to Tokyo Midtown</div>
            <div class="venueButtonRight">Venue Map</div>
        </div>

    </div>
    <div class="program">
        <h1 class="programH">Program</h1>
        <div class="programBottom">
            <div class="programBottomLeft">
                <img alt="">
                <br>
                <h3>Exhibition</h3>
                <span>Booth Exhibition</span>
                <span>Poster Exhibition</span>
                <div class="programButon">Exhibition List</div>
            </div>
            <div class="programBottomCenter">
                <img alt="">
                <br>
                <h3>Session</h3>
                <span>Sponsor Session</span>
                <span>Session</span>
                <div class="programButon">Session List</div>
            </div>
            <div class="programBottomRight">
                <img alt="">
                <br>
                <h3>Pitch</h3>
                <span>Open Research Pitch</span>
                <span>SFC Special OB/OG Session</span>
                <div class="programButon">Pitch List</div>
            </div>
        </div>
    </div>
    <!-- <div class="satellite Event">
        <h1 class="satelliteH">Satellite Event</h1>
        <img alt="">
        <span>Final round and award</span>
        <span>ceremony of Fab 3D</span>
        <span>Contest 2018</span>
        <div class="satelliteButton">
            Learn More
        </div>
    </div> -->
    <div class="bottom">
        <div class="bottomIcon">
            <div class="facebook"></div>
            <div class="twitter"></div>
        </div>
        <ul class="bottomLink">
            <li>Home</li>
            <li>Event Outline</li>
            <li>Venue Map</li>
            <li>Access</li>
            <li>Session Timetable</li>
            <li>Pitch Timetable</li>
            <li>Exhibition</li>
            <li>Session</li>
            <li>Pitch</li>
            <li>Satellite Event</li>
            <li>Privacy Policy</li>
        </ul>
        <div class="bottomContact">
            <h2 class="contactH">Contact</h2>
            <p class="contactContent">ORF Office, Office of Research Development and Sponsored Projects, Shonan Fujisawa Campus, Keio University</p>
            <p class="contactEmail">orf-info@sfc.keio.ac.jp</p>
            <p class="contactPhone">0466-49-3436</p>
        </div>
        <div class="toTopButton"></div>
    </div>
</body>

</html>`;
});
router.init("/#/en");
