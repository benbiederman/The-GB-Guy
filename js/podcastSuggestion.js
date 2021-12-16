const currentHeader = document.querySelector('.content-article h1');
const contentContainer = document.querySelector('.content-container');

// Local's Guide Data
class Podcast {
    constructor(name, img, imgDesc, src, episode) {
        this.name = name;
        this.img = img;
        this.imgDesc = imgDesc;
        this.src = src;
        this.episode = episode;
    }
}

const ep1 = new Podcast(`Wade S.`, `../img/podcast/episode-1-wade-s.jpg`, `Wade with Charlie Peprah`, `../podcast/episode-1.html`, 'Episode 01', ["1", "one", "episode 1", "episode one", "wade s"]);

const ep2 = new Podcast(`Chad N.`, `../img/podcast/episode-2-chad-n.jpg`, `Chad's Packer room`, `../podcast/episode-2.html`, 'Episode 02', ["2", "two", "episode 2", "episode two", "chad n"]);

const ep3 = new Podcast(`Zak & Ashli`, `../img/podcast/episode-3-zak-and-ashli.jpg`, `Zak and Ashli at Soldier Field`, `../podcast/episode-3.html`, 'Episode 03', ["3", "three", "episode 3", "episode three", "ashli", "zak"]);

const ep4 = new Podcast(`Dave C.`, `../img/podcast/episode-4-dave-c.jpg`, `Dave with his father in the Monday Night Football van`, `../podcast/episode-4.html`, 'Episode 04', ["4", "four", "episode 4", "episode four", "dave c"]);

const ep5 = new Podcast(`Maggie & Mark`, `../img/podcast/episode-5-mark-and-maggie.jpg`, `Maggie and Mark with Swagger the Browns dog`, `../podcast/episode-5.html`, 'Episode 05', ["5", "five", "episode 5", "episode five", "maggie", "mark"]);

const ep6 = new Podcast(`Matt Ramage`, `../img/podcast/episode-6-matt-ramage.jpg`, `Matt Ramage`, `../podcast/episode-6.html`, 'Episode 06', ["6", "six", "episode 6", "episode six", "matt ramage"]);

const ep7 = new Podcast(`Jason F.`, `../img/podcast/episode-7-jason-f.jpg`, `Jason at his Packers bar`, `../podcast/episode-7.html`, 'Episode 07', ["7", "seven", "episode 7", "episode one", "jason f"]);

const ep8 = new Podcast(`Duke B.`, `../img/podcast/episode-8-duke-b.jpg`, `Duke with his family`, `../podcast/episode-8.html`, 'Episode 08', ["8", "eight", "episode 8", "episode eight", "duke b"]);

const ep9 = new Podcast(`Corey P.`, `../img/podcast/episode-9-corey-p.jpg`, `Corey at Lambeau Field`, `../podcast/episode-9.html`, 'Episode 09', ["9", "nine", "episode 9", "episode nine", "corey p"]);

const ep10 = new Podcast(`Curt C.`, `../img/podcast/episode-10-curt-c.jpg`, `Curt with his wife and Mike Daniels`, `../podcast/episode-10.html`, 'Episode 10', ["10", "ten", "episode 10", "episode ten", "curt c"]);

const ep11 = new Podcast(`Andrew S.`, `../img/podcast/episode-11-andrew-s.jpg`, `Andrew cheering`, `../podcast/episode-11.html`, 'Episode 11', ["11", "eleven", "episode 11", "episode eleven", "andrew s"]);

const ep12 = new Podcast(`Jackie S.`, `../img/podcast/episode-12-jackie-s.jpg`, `Jackie with her husband`, `../podcast/episode-12.html`, 'Episode 12', ["12", "twelve", "episode 12", "episode twelve", "jackie s"]);

const ep13 = new Podcast(`Peter B.`, `../img/podcast/episode-13-peter-b.jpg`, `Peter with Don Majkowski`, `../podcast/episode-13.html`, 'Episode 13', ["13", "thirteen", "episode 13", "episode thirteen", "peter b"]);

const ep14 = new Podcast(`Travis F.`, `../img/podcast/episode-14-travis-f.jpg`, `Travis with his kids`, `../podcast/episode-14.html`, 'Episode 14', ["14", "fourteen", "episode 14", "episode fourteen", "travis f"]);

const ep15 = new Podcast(`Landon K.`, `../img/podcast/episode-15-landon-k.jpg`, `Landon K`, `../podcast/episode-15.html`, 'Episode 15', ["15", "fifteen", "episode 15", "episode fifteen", "landon k"]);

const ep16 = new Podcast(`Katie K.`, `../img/podcast/episode-16-katie-k.jpg`, `Katie with Spotted Cow`, `../podcast/episode-16.html`, 'Episode 16', ["16", "sixteen", "episode 16", "episode sixteen", "katie k"]);

const ep17 = new Podcast(`Joe O.`, `../img/podcast/episode-17-joe-o.jpg`, `Joe with two Vikings fans`, `../podcast/episode-17.html`, 'Episode 17', ["17", "seventeen", "episode 17", "episode seventeen", "joe o"]);

const ep18 = new Podcast(`Adam O.`, `../img/podcast/episode-18-adam-o.jpg`, `Adam with his Packers collection`, `../podcast/episode-18.html`, 'Episode 18', ["18", "eighteen", "episode 18", "episode eighteen", "adam o"]);

const ep19 = new Podcast(`Marianne K.`, `../img/podcast/episode-19-marianne-k.jpg`, `Marianne K`, `../podcast/episode-19.html`, 'Episode 19', ["19", "nineteen", "episode 19", "episode nineteen", "marianne k"]);

const ep20 = new Podcast(`Ben C.`, `../img/podcast/episode-20-ben-c.jpg`, `Ben with his wife at Lambeau Field`, `../podcast/episode-20.html`, 'Episode 20', ["20", "twenty", "episode 20", "episode twenty", "ben c"]);

const ep21 = new Podcast(`Rob M.`, `../img/podcast/episode-21-rob-m.jpg`, `Rob M`, `../podcast/episode-21.html`, 'Episode 21', ["21", "twenty-one", "episode 21", "episode twenty-one", "rob m"]);

const ep22 = new Podcast(`Josh P.`, `../img/podcast/episode-22-josh-p.jpg`, `Josh with Haha Clinton Dix and Quinten Rollins`, `../podcast/episode-22.html`, 'Episode 22', ["22", "twenty-two", "episode 22", "episode twenty-two", "josh p"]);

const ep23 = new Podcast(`DuJuan Harris`, `../img/podcast/episode-23-dujuan-harris.jpg`, `DuJuan Harris scoring touchdown against Lions`, `../podcast/episode-23.html`, 'Episode 23', ["23", "twenty-three", "episode 23", "episode twenty-three", "dujuan harris"]);

const ep24 = new Podcast(`The Drew`, `../img/podcast/episode-24-the-drew.jpg`, `The Drew Cave`, `../podcast/episode-24.html`, 'Episode 24', ["24", "twenty-four", "episode 24", "episode twenty-four", "the drew"]);

const ep25 = new Podcast(`Mark D.`, `../img/podcast/episode-25-mark-d.jpg`, `Mark with his wife`, `../podcast/episode-25.html`, 'Episode 25', ["25", "twenty-five", "episode 25", "episode twenty-five", "mark d"]);

const ep26 = new Podcast(`Raffael G.`, `../img/podcast/episode-26-raffael-g.jpg`, `Raffael in Lambeau Field`, `../podcast/episode-26.html`, 'Episode 26', ["26", "twenty-six", "episode 26", "episode twenty-six", "raffael g"]);

const ep27 = new Podcast(`Juan A.`, `../img/podcast/episode-27-juan-a.jpg`, `Juan with his son at Lambeau Field`, `../podcast/episode-27.html`, 'Episode 27', ["27", "twenty-seven", "episode 27", "episode twenty-seven", "juan a"]);

const ep28 = new Podcast(`Matt M.`, `../img/podcast/episode-28-matt-m.jpg`, `Matt at Lambeau Field with a sign`, `../podcast/episode-28.html`, 'Episode 28', ["28", "twenty-eight", "episode 28", "episode twenty-eight", "matt m"]);

const ep29 = new Podcast(`Rob W.`, `../img/podcast/episode-29-rob-w.jpg`, `Rob with Donald Driver`, `../podcast/episode-29.html`, 'Episode 29', ["29", "twenty-nine", "episode 29", "episode twenty-nine", "rob w"]);

const ep30 = new Podcast(`Kevin T.`, `../img/podcast/episode-30-kevin-t.jpg`, `Kevin with his dad on Halloween`, `../podcast/episode-30.html`, 'Episode 30', ["30", "thirty", "episode 30", "episode thirty", "kevin t"]);

const ep31 = new Podcast(`Kevin P.`, `../img/podcast/episode-31-kevin-p.jpg`, `Kevin doing a Lambeau Leap`, `../podcast/episode-31.html`, 'Episode 31', ["31", "thirty-one", "episode 31", "episode thirty-one", "kevin p"]);

const ep32 = new Podcast(`Aaron F.`, `../img/podcast/episode-32-aaron-f.jpg`, `Aaron in his Packers room`, `../podcast/episode-32.html`, 'Episode 32', ["32", "thirty-two", "episode 32", "episode thirty-two", "aaron f"]);

const ep33 = new Podcast(`Joe P.`, `../img/podcast/episode-33-joe-p.jpg`, `Joe with Josh Jackson`, `../podcast/episode-33.html`, 'Episode 33', ["33", "thirty-three", "episode 33", "episode thirty-three", "joe p"]);

const ep34 = new Podcast(`Paul B.`, `../img/podcast/episode-34-paul-b.jpg`, `Paul wearing his Bart Starr jersey`, `../podcast/episode-34.html`, 'Episode 34', ["34", "thirty-four", "episode 34", "episode thirty-four", "paul b"]);

const ep35 = new Podcast(`Chris Jacke`, `../img/podcast/episode-35-chris-jacke.jpg`, `Chris Jacke kicking a field goal`, `../podcast/episode-35.html`, 'Episode 35', ["35", "thirty-five", "episode 35", "episode thirty-five", "chris jacke"]);

const ep36 = new Podcast(`Robert D.`, `../img/podcast/episode-36-robert-d.jpg`, `Robert with his son at Lambeau Field`, `../podcast/episode-36.html`, 'Episode 36', ["36", "thirty-six", "episode 36", "episode thirty-six", "robert d"]);

const ep37 = new Podcast(`Roy Meulemans`, `../img/podcast/episode-37-roy-meulemans.jpg`, `Roy being punched by Vince Lombardi`, `../podcast/episode-37.html`, 'Episode 37', ["37", "thirty-seven", "episode 37", "episode thirty-seven", "roy meulemans"]);

const ep38 = new Podcast(`John P.`, `../img/podcast/episode-38-john-p.jpg`, `John with his sons`, `../podcast/episode-38.html`, 'Episode 38', ["38", "thirty-eight", "episode 38", "episode thirty-eight", "john p"]);

const ep39 = new Podcast(`Alex D.`, `../img/podcast/episode-39-alex-d.jpg`, `Alex with a Miami Dolphins player`, `../podcast/episode-39.html`, 'Episode 39', ["39", "thirty-nine", "episode 39", "episode thirty-nine", "alex d"]);

const ep40 = new Podcast(`Oren Burks`, `../img/podcast/episode-40-oren-burks.jpg`, `Oren Burks playing against the Steelers`, `../podcast/episode-40.html`, 'Episode 40', ["40", "forty", "episode 40", "episode forty", "oren burks"]);

const ep41 = new Podcast(`Tony R.`, `../img/podcast/episode-41-tony-r.jpg`, `Tony with his daughter`, `../podcast/episode-41.html`, 'Episode 41', ["41", "forty-one", "episode 41", "episode forty-one", "tony r"]);

const ep42 = new Podcast(`Jarrett S.`, `../img/podcast/episode-42-jarrett-s.jpg`, `Jarrett with his wife`, `../podcast/episode-42.html`, 'Episode 42', ["42", "forty-two", "episode 42", "episode forty-two", "jarrett s"]);

const ep43 = new Podcast(`Carson C.`, `../img/podcast/episode-43-carson-c.jpg`, `Carson with his friend in Detroit `, `../podcast/episode-43.html`, 'Episode 43', ["43", "forty-three", "episode 43", "episode fourty-three", "carson c"]);

const ep44 = new Podcast(`Steve "The Owner" Tate`, `../img/podcast/episode-44-steve-tate.jpg`, `Steve The Owner at the NFL Draft`, `../podcast/episode-44.html`, 'Episode 44', ["44", "forty-four", "episode 44", "episode fourty-four", "steve tate", "steve the owner"]);

const ep45 = new Podcast(`Don Beebe`, `../img/podcast/episode-45-don-beebe.jpg`, `Don Beebe scoring a touchdown`, `../podcast/episode-45.html`, 'Episode 45', ["45", "forty-five", "episode 45", "episode fourty-five", "don beebe"]);

const ep46 = new Podcast(`Fred Thurston`, `../img/podcast/episode-46-fred-thurston.jpg`, `Fred Thurston sitting in Lombardi's desk`, `../podcast/episode-46.html`, 'Episode 46', ["46", "forty-six", "episode 46", "episode fourty-six", "fred thurston"]);

const ep47 = new Podcast(`Senor Cheesehead`, `../img/podcast/episode-47-senor-cheesehead.jpg`, `Senor Cheesehead with his graveyard`, `../podcast/episode-47.html`, 'Episode 47', ["47", "forty-seven", "episode 47", "episode fourty-seven", "senor cheesehead"]);

const ep48 = new Podcast(`AJ G.`, `../img/podcast/episode-48-aj-g.jpg`, `AJ with Jerry Kramer`, `../podcast/episode-48.html`, 'Episode 48', ["48", "forty-eight", "episode 48", "episode fourty-eight", "aj g"]);

const ep49 = new Podcast(`Tim B.`, `../img/podcast/episode-49-tim-b.jpg`, `Tim posing with a shareholder jersey`, `../podcast/episode-49.html`, 'Episode 49', ["49", "forty-nine", "episode 49", "episode fourty-nine", "tim b"]);

const ep50 = new Podcast(`Ben B.`, `../img/podcast/episode-50-ben-b.jpg`, `Ben at Lambeau Field`, `../podcast/episode-50.html`, 'Episode 50', ["50", "fifty", "episode 50", "episode fifty", "ben b", "the green bay guy"]);

const content = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, ep10, ep11, ep12, ep13, ep14, ep15, ep16, ep17, ep18, ep19, ep20, ep21, ep22, ep23, ep24, ep25, ep26, ep27, ep28, ep29, ep30, ep31, ep32, ep33, ep34, ep35, ep36, ep37, ep38, ep39, ep40, ep41, ep42, ep43, ep44, ep45, ep46, ep47, ep48, ep49, ep50];

function generateSuggestion(){
    let suggestions = [];

    // Find four pieces of content unique from current piece of content
    do {
        let randomNumber = Math.floor(Math.random() * content.length);
        if(content[randomNumber].name === currentHeader.innerHTML){
            // Checks to make sure it's not the same as the current piece of content shown
        } else {
            let suggestion = content.splice((randomNumber), 1);
            suggestions = [...suggestions, suggestion];
        }
    } while (suggestions.length != 4);

    // Create content item for each piece of content in suggestions
    for(let i = 0; i < suggestions.length; i++){
        createContentItem(suggestions[i][0])
    }
}

generateSuggestion();


// Create content item
function createContentItem(content){
    const contentItem = document.createElement('article');
    contentItem.className = 'content-item';
    contentContainer.appendChild(contentItem);
    contentItem.tabIndex = 0;

    contentItem.addEventListener('click', () => {
        window.location.href = content.src;
    })

    contentItem.addEventListener('keypress', (e) => {
        if(e.key === "Enter"){
            window.location.href = content.src;
        }        
    })
    
    const contentFigure = document.createElement('figure');
    contentItem.appendChild(contentFigure);

    const contentImg = document.createElement('img');
    contentImg.src = content.img;
    contentImg.alt = `${content.name} menu item`;
    contentFigure.appendChild(contentImg);

    const contentHeader = document.createElement('h2');
    contentHeader.textContent = content.name;
    contentItem.appendChild(contentHeader);

    const episodeNumber = document.createElement('p');
    episodeNumber.textContent = `${content.episode}`;
    contentItem.appendChild(episodeNumber);

    const contentLink = document.createElement('p');
    contentLink.textContent = '- Listen Now -';
    contentItem.appendChild(contentLink);
}