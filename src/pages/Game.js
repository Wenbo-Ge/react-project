import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Game.scss";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import news_cn from "../assets/audio/news_cn.mp3";
import news_kor from "../assets/audio/news_kor.mp3";
import news_jap from "../assets/audio/news_jap.mp3";
import nation_cn from "../assets/audio/nation_cn.mp3";
import nation_kor from "../assets/audio/nation_kor.mp3";
import nation_jap from "../assets/audio/nation_jap.mp3";
import quiz1_0 from "../assets/images/olympic_simply_chinese.png";
import quiz1_1 from "../assets/images/olympic_traditional_chinese.png";
import quiz2_0 from "../assets/images/usa_cn.png";
import quiz2_1 from "../assets/images/usa_kor.png";
import quiz2_2 from "../assets/images/usa_jap.png";
import quiz3_0 from "../assets/images/canada_jap.png";
import quiz3_1 from "../assets/images/canada_cn.png";
import quiz3_2 from "../assets/images/canada_kor.png";
import quiz4_0 from "../assets/images/eco_jap.png";
import quiz4_1 from "../assets/images/eco_tra_cn.png";
import quiz4_2 from "../assets/images/eco_cn.png";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pageCorrectness: ["default","default","default","default","default","default"],
          listening_1: [new Audio(news_cn), new Audio(news_kor), new Audio(news_jap)],
          listening_2: [new Audio(nation_cn), new Audio(nation_kor), new Audio(nation_jap)],
        };
      }
  
    showAnswerOne () {
        this.setState({
                pageCorrectness: ["correct","default","default","default","default","default"]
            }); 
    }
    showAnswerTwo () {
        this.setState({
                pageCorrectness: ["default","correct","default","default","default","default"]
            });
    }

    showAnswerThree () {
      this.setState({
        pageCorrectness: ["default","default","correct","default","default","default"]
    });
    }

    showAnswerFour () {
      this.setState({
        pageCorrectness: ["default","default","default","correct","default","default"]
    });
    }

    showAnswerFive () {
      this.setState({
        pageCorrectness: ["default","default","default","default","correct","default"]
    });
    }

    showAnswerSix () {
      this.setState({
        pageCorrectness: ["default","default","default","default","default","correct"]
    });
    }

    listening_1_cn = () => {
          this.state.listening_1[0].play();
      };

    listening_1_kor = () => {
        this.state.listening_1[1].play();
    };

    listening_1_jap = () => {
      this.state.listening_1[2].play();
  };

  listening_2_cn = () => {
    this.state.listening_2[0].play();
};

listening_2_kor = () => {
  this.state.listening_2[1].play();
};

listening_2_jap = () => {
this.state.listening_2[2].play();
};


  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    const styleObj = {
      columns: 3,
      padding: '4%',
    };
    return (
      <div className="Game">
        <h1 style={{marginBottom:"5%"}}>East Asia Languages Quiz</h1>
        <Slider {...settings}>
          <div>
          <Card style={{backgroundColor: "gainsboro"}}>
          <Typography gutterBottom variant="h4" component="h4">
              Quiz 1-2: English Word "Olympic Games" in Chinese
          </Typography>   
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz1_0}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span><b>A. This is Traditional Chinese</b></span>
                    <br />
                    <span className={this.state.pageCorrectness[0]}><b>B. This is Simplified Chinese</b></span> 
                </Typography>
                </CardContent>
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz1_1}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={this.state.pageCorrectness[0]}><b>A. This is Traditional Chinese</b></span>
                    <br />
                    <span><b>B. This is Simplified Chinese</b></span> 
                </Typography>
                </CardContent>
            <CardActions style={{display:"inline-flex"}}>
                <span>Show answers: </span>
                <IconButton color="secondary" aria-label="add an alarm" 
                onClick={() => this.showAnswerOne()}
                >
                <VisibilityIcon/>
              </IconButton>
            </CardActions>
          </Card>
          </div>
          <div>
          <Card style={{backgroundColor: "gainsboro"}}>
          <Typography gutterBottom variant="h4" component="h4">
              Quiz 3-5: English Word "United State of America" in Chinese/Japanese/Korean
          </Typography>   
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz2_0}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={this.state.pageCorrectness[1]}><b>A. This is Chinese</b></span>
                    <br />
                    <span><b>B. This is Japanese</b></span> 
                    <br />
                    <span><b>C. This is Korean</b></span> 
                </Typography>
                </CardContent>
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz2_1}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span><b>A. This is Chinese</b></span>
                    <br />
                    <span><b>B. This is Japanese</b></span> 
                    <br />
                    <span className={this.state.pageCorrectness[1]}><b>C. This is Korean</b></span> 
                </Typography>
                </CardContent>
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz2_2}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span><b>A. This is Chinese</b></span>
                    <br />
                    <span className={this.state.pageCorrectness[1]}><b>B. This is Japanese</b></span> 
                    <br />
                    <span><b>C. This is Korean</b></span> 
                </Typography>
                </CardContent>
            <CardActions style={{display:"inline-flex"}}>
                <span>Show answers: </span>
                <IconButton color="secondary" aria-label="add an alarm" 
                onClick={() => this.showAnswerTwo()}
                >
                <VisibilityIcon/>
              </IconButton>
            </CardActions>
          </Card>
          </div>
          <div>
          <Card style={{backgroundColor: "gainsboro"}}>
          <Typography gutterBottom variant="h4" component="h4">
              Quiz 6-8: English Word "Canada" in Chinese/Japanese/Korean
          </Typography>   
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz3_0}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span><b>A. This is Chinese</b></span>
                    <br />
                    <span className={this.state.pageCorrectness[2]}><b>B. This is Japanese</b></span> 
                    <br />
                    <span><b>C. This is Korean</b></span> 
                </Typography>
                </CardContent>
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz3_1}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={this.state.pageCorrectness[2]}><b>A. This is Chinese</b></span>
                    <br />
                    <span><b>B. This is Japanese</b></span> 
                    <br />
                    <span><b>C. This is Korean</b></span> 
                </Typography>
                </CardContent>
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz3_2}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span><b>A. This is Chinese</b></span>
                    <br />
                    <span><b>B. This is Japanese</b></span> 
                    <br />
                    <span className={this.state.pageCorrectness[2]}><b>C. This is Korean</b></span> 
                </Typography>
                </CardContent>
            <CardActions style={{display:"inline-flex"}}>
                <span>Show answers: </span>
                <IconButton color="secondary" aria-label="add an alarm" 
                onClick={() => this.showAnswerThree()}
                >
                <VisibilityIcon/>
              </IconButton>
            </CardActions>
          </Card>
          </div>
          <div>
          <Card style={{backgroundColor: "gainsboro"}}>
          <Typography gutterBottom variant="h4" component="h4">
              Quiz 9-11: English Word "Economy" in Simlified/Traditional Chinese/Japanese
          </Typography>   
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz4_0}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span><b>A. This is Simplified Chinese</b></span>
                    <br />
                    <span className={this.state.pageCorrectness[3]}><b>B. This is Japanese</b></span> 
                    <br />
                    <span><b>C. This is Traditional Chinese</b></span> 
                </Typography>
                </CardContent>
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz4_1}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span><b>A. This is Simplified Chinese</b></span>
                    <br />
                    <span><b>B. This is Japanese</b></span> 
                    <br />
                    <span className={this.state.pageCorrectness[3]}><b>C. This is Traditional Chinese</b></span> 
                </Typography>
                </CardContent>
                <CardMedia
                style={{height: "100px",
                        backgroundSize: "contain"}}
                image={quiz4_2}
                title="Quiz 1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={this.state.pageCorrectness[3]}><b>A. This is Simplified Chinese</b></span>
                    <br />
                    <span><b>B. This is Japanese</b></span> 
                    <br />
                    <span><b>C. This is Traditional Chinese</b></span> 
                </Typography>
                </CardContent>
            <CardActions style={{display:"inline-flex"}}>
                <span>Show answers: </span>
                <IconButton color="secondary" aria-label="add an alarm" 
                onClick={() => this.showAnswerFour()}
                >
                <VisibilityIcon/>
              </IconButton>
            </CardActions>
          </Card>
          </div>
          
          <div>
          <Card style={{backgroundColor: "gainsboro"}}>
          <Typography gutterBottom variant="h4" component="h4">
              Quiz 12-14: Pronunciations of "I am Chinese/Japanese/Korean" in Chinese/Japanese/Korean
          </Typography>
          <CardContent>
            <div className="question_sec" style={styleObj}>
              <div className="question">
                <IconButton aria-label="play/pause" onClick={this.listening_2_kor}>
                  <PlayArrowIcon color="secondary" aria-label="add an alarm"/>
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">
                      <span><b>A. This is Chinese</b></span>
                      <br />
                      <span><b>B. This is Japanese</b></span> 
                      <br />
                      <span className={this.state.pageCorrectness[4]}><b>C. This is Korean</b></span> 
                </Typography>
              </div>
              <div className="question">
                <IconButton aria-label="play/pause" onClick={this.listening_2_jap}>
                  <PlayArrowIcon color="secondary" aria-label="add an alarm"/>
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">
                      <span><b>A. This is Chinese</b></span>
                      <br />
                      <span  className={this.state.pageCorrectness[4]}><b>B. This is Japanese</b></span> 
                      <br />
                      <span><b>C. This is Korean</b></span> 
                </Typography>
              </div>
              <div className="question">
                <IconButton aria-label="play/pause" onClick={this.listening_2_cn}>
                  <PlayArrowIcon color="secondary" aria-label="add an alarm"/>
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">
                      <span className={this.state.pageCorrectness[4]}><b>A. This is Chinese</b></span>
                      <br />
                      <span><b>B. This is Japanese</b></span> 
                      <br />
                      <span><b>C. This is Korean</b></span> 
                </Typography>
              </div>
            </div> 
            </CardContent>
            <CardActions style={{display:"inline-flex"}}>
                <span>Show answers: </span>
                <IconButton color="secondary" aria-label="add an alarm" 
                onClick={() => this.showAnswerFive()}
                >
                <VisibilityIcon/>
              </IconButton>
            </CardActions>
          </Card>
          </div>

          <div>
          <Card style={{backgroundColor: "gainsboro"}}>
          <Typography gutterBottom variant="h4" component="h4">
              Quiz 15-17: News recordings in Chinese/Japanese/Korean
          </Typography>
          <CardContent>
            <div className="question_sec" style={styleObj}>
              <div className="question">
                <IconButton aria-label="play/pause" onClick={this.listening_1_cn}>
                  <PlayArrowIcon color="secondary" aria-label="add an alarm"/>
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">
                      <span  className={this.state.pageCorrectness[5]}><b>A. This is Chinese</b></span>
                      <br />
                      <span><b>B. This is Japanese</b></span> 
                      <br />
                      <span><b>C. This is Korean</b></span> 
                </Typography>
              </div>
              <div className="question">
                <IconButton aria-label="play/pause" onClick={this.listening_1_jap}>
                  <PlayArrowIcon color="secondary" aria-label="add an alarm"/>
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">
                      <span><b>A. This is Chinese</b></span>
                      <br />
                      <span  className={this.state.pageCorrectness[5]}><b>B. This is Japanese</b></span> 
                      <br />
                      <span><b>C. This is Korean</b></span> 
                </Typography>
              </div>
              <div className="question">
                <IconButton aria-label="play/pause" onClick={this.listening_1_kor}>
                  <PlayArrowIcon color="secondary" aria-label="add an alarm"/>
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">
                      <span><b>A. This is Chinese</b></span>
                      <br />
                      <span><b>B. This is Japanese</b></span> 
                      <br />
                      <span className={this.state.pageCorrectness[5]}><b>C. This is Korean</b></span> 
                </Typography>
              </div>
            </div> 
            </CardContent>
            <CardActions style={{display:"inline-flex"}}>
                <span>Show answers: </span>
                <IconButton color="secondary" aria-label="add an alarm" 
                onClick={() => this.showAnswerSix()}
                >
                <VisibilityIcon/>
              </IconButton>
            </CardActions>
          </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
 
// export default Game;