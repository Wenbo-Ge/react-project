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
import speakCN from "../assets/audio/CNword.mp3";
import quiz1_0 from "../assets/images/olympic_simply_chinese.png"
import quiz1_1 from "../assets/images/olympic_traditional_chinese.png"

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pageCorrectness: ["default","default","default","default","default","default"],
          speakCN: new Audio(speakCN)
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

    playOne = () => {
          this.state.speakCN.play();
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
    return (
      <div className="Game">
        <h1 style={{marginBottom:"5%"}}>East Asia Languages Quiz</h1>
        <Slider {...settings}>
          <div>
          <Card style={{backgroundColor: "gainsboro"}}>
          <Typography gutterBottom variant="h4" component="h4">
              Quiz 1: English Word "Olympic Games" in Chinese
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
              Quiz 1: English Word "Olympic Games" in Chinese
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
                    <span className={this.state.pageCorrectness[1]}><b>B. This is Simplified Chinese</b></span> 
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
                    <span className={this.state.pageCorrectness[1]}><b>A. This is Traditional Chinese</b></span>
                    <br />
                    <span><b>B. This is Simplified Chinese</b></span> 
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
             <IconButton aria-label="play/pause" onClick={this.playOne}>
                <PlayArrowIcon />
             </IconButton>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
 
// export default Game;