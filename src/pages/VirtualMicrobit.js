import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { firestore } from "../FirebaseDB/FirebaseDB";
import "./VirtualMicrobit.scss";
import BluetoothSearchingIcon from '@material-ui/icons/BluetoothSearching';
import IconButton from '@material-ui/core/IconButton';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {uBit} from "../microBit";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import MenuItem from '@material-ui/core/MenuItem';



class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        squares: Array(25).fill(null),
        name: "",
        buttonName: Array(25).fill("square"),
        iconFetch: {},
        search: null,
        displayControll: false,
        submitControll: false,
        microBit: new uBit(),
        connectionStatus: false,
        iconFetchAll: ['Names'],
        selectOptions: ["singleNameListOn", "allNamesListOff"]
      };
    }

  validatePair () {
    // console.log(this.state.microBit.connected)
    this.setState({
      connectionStatus: this.state.microBit.connected
  });
  // console.log(this.state.connectionStatus)
  }

  handleClick(i) {
      const squares = this.state.squares.slice();
      if (squares[i] == null)
      squares[i] = "X"
      else 
      squares[i] = null
      this.setState({
          squares: squares
      });

      
      const buttonName = this.state.buttonName.slice();
      if (buttonName[i] === "square")
      buttonName[i] = "on"
      else
      buttonName[i] = "square"
      this.setState({
        buttonName: buttonName
      });   
  }

  displayIcon () {
    const coor = this.state.iconFetch
    const buttonName = this.state.buttonName.slice();

    console.log("Icon should be displayed: " + coor)

      coor.keyValue.forEach((item, i) => {
        console.log("Current button class name: " + buttonName[i] + ", will be set to: " + item.className + " according to coordinates from database.")

        if (buttonName[i] !== item.className)
          buttonName[i] = "on"
          else
          buttonName[i] = "square"
          this.setState({
            buttonName: buttonName,
            displayControll: false
          }); 
    })
  }

  setName(event){
      this.setState({
          name: event.target.value
      })
  }

  setSearch(event){
    this.setState({
        search: event.target.value
    })
}

  renderSquare(i) {

    return (
      <button className={this.state.buttonName[i]} onClick={() => this.handleClick(i)}>
          {/* {props.value} */}
      </button>
      );
  }

  fetchIcon(event) {
      event.preventDefault();
      // console.log("read data")
      const iconDictionary = firestore.collection('coordinates');

      iconDictionary.doc(this.state.search).get().then((doc) => {
        if (doc.exists) {
          this.setState({
            iconFetch: doc.data(),
            displayControll: true
          });
          console.log("Icon Coordinates: ", this.state.iconFetch);
          this.clear()
          alert("Icon is fetched, click DISPLAY button!")
        } else {
            // doc.data() will be undefined in this case
            alert("No such icon!");
            this.setState({
              displayControll: false
            });
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
 
  }

  fetchIconAll(event) {
    event.preventDefault();
    let nameArray =  []
    // console.log("read data")
    const iconDictionary = firestore.collection('coordinates');
    iconDictionary.get().then(res => {
      res.docs.map(doc => 
        nameArray.push(doc.id))
    this.setState({
      iconFetchAll: nameArray,
      displayControll: false,
      selectOptions: ["singleNameListOff", "allNamesListOn"]
    })
    // console.log(this.state.iconFetchAll)
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

}

  checkIcon () {
      
      const iconDictionary = firestore.collection('coordinates');

      iconDictionary.doc(this.state.name).get().then((doc) => {
        if (doc.exists) {
          this.setState({
            submitControll: false
          });
          alert("Icon name is existed, choose another name!")
        } else {
            // doc.data() will be undefined in this case
            this.setState({
              submitControll: true
            });
            alert("Name is okay");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }


  async saveIcon(event){
      
      const squares = this.state.squares.slice();
      let board = []
      let icon = {}

      squares.forEach((square, index) => {
        board.push({"Position" : index,
                    "className" : !!square ? "on" : "square"})
          
      })
      icon['keyValue'] = board
      console.log(JSON.stringify(icon))
      const db = firestore.collection("coordinates");
      db.doc(this.state.name).set(icon)
      .catch((error) => {
          console.log(error)
      });

      this.setState({
        submitControll: false
      });

      event.preventDefault()
      
      alert("Your icon is saved!")
      
  }

  clear() {
    this.setState({
      squares: Array(25).fill(null),
      buttonName: Array(25).fill("square")
  });
    console.log("clear procesing")
   

  }

  lightIcon() {
    const squares = this.state.squares.slice();
    let ledMatrix = []
    let ledMatrix_row0 = []
    let ledMatrix_row1 = []
    let ledMatrix_row2 = []
    let ledMatrix_row3 = []
    let ledMatrix_row4 = []
  
    squares.forEach((square, index) => {
      if (index <= 4) {
        ledMatrix_row0.push(!!square ? '1' : '0')
      } else if (index <= 9) {
        ledMatrix_row1.push(!!square ? '1' : '0')
      } else if (index <= 14) {
        ledMatrix_row2.push(!!square ? '1' : '0')
      } else if (index <= 19) {
        ledMatrix_row3.push(!!square ? '1' : '0')
      } else {
        ledMatrix_row4.push(!!square ? '1' : '0')
      }
    })
  
    ledMatrix = [ledMatrix_row0, ledMatrix_row1, ledMatrix_row2, ledMatrix_row3, ledMatrix_row4]
    
    console.log(JSON.stringify(ledMatrix))

    if (this.state.connectionStatus) {
      this.state.microBit.writeMatrixIcon(ledMatrix)
    } else {
      alert("Your micro:bit device is not paired!")
    }
    
  }
  

  render() {
    const status = 'micro:bit Icons';

    return (
      <div>
        <h1 className="status">{status}</h1>
          <div className="ledBackground">
            <div className="ledTitle">
              <div className="leftCornor"></div>
              <div className="midIcon"></div>
            </div>
            <div className="ledPane">
              <div className="leftPane">
                <div className="leftButton"></div>
              </div>
              <div className="midPane">
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                </div>
                <div className="board-row">
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                </div>
                <div className="board-row">
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
                </div>
                <div className="board-row">
                {this.renderSquare(15)}
                {this.renderSquare(16)}
                {this.renderSquare(17)}
                {this.renderSquare(18)}
                {this.renderSquare(19)}
                </div>
                <div className="board-row">
                {this.renderSquare(20)}
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
                </div>
              </div>
              <div className="rightPane">
                <div className="rightButton"></div>
              </div>
            </div>
            
            <div className="ledFooter"></div>
          </div>
        
          <div className="clearButton" style={{textAlign: 'center'}}>
          <span>Reset:</span>
          <IconButton color="secondary" aria-label="add an alarm" onClick={() => this.clear()}>
                <HighlightOffIcon/>
          </IconButton>
          <span>Pair:</span>
          <IconButton color="secondary" aria-label="add an alarm" onClick={(event) => this.state.microBit.searchDevice()}>
          <BluetoothSearchingIcon/>
          </IconButton>
          <span>Sync:</span>
          <IconButton color="secondary" aria-label="add an alarm" onMouseEnter={() => this.validatePair()} onClick={() => this.lightIcon()}>
          <ImportantDevicesIcon/>
          </IconButton>
          </div>
        <form validate="true" autoComplete="off" onSubmit={(event) => this.saveIcon(event)} >
            <div className="nameField">
            <TextField id="standard-basic" label="Give it a name" required onChange={(event) => this.setName(event)} style={{
                margin: '0 auto',
                width: '125px'
                }}/>
            </div>
            <div className="ledControll">
              <input type="submit" value = "SAVE" disabled={!this.state.submitControll}></input>
              <input type="button" value = "VALIDATE" onClick={() => this.checkIcon()} disabled={this.state.name === ""}></input>
            </div>
        </form>
        <form className={this.state.selectOptions[0]} validate="true" autoComplete="off" onSubmit={(event) => this.fetchIcon(event)} >
            <TextField id="standard-basic-search" label="Search" required onChange={(event) => this.setSearch(event)} style={{
                    margin: '15px auto',
                    display: 'inline-flex',
                    width: '145px'
                    }}/>

            <div className="searchControll">
            <input type="submit" value = "FETCH"></input>
            <input type="button" value = "DISPLAY" disabled={!this.state.displayControll} onClick={() => this.displayIcon()}></input>
            </div>
            
        </form>

        <form className={this.state.selectOptions[1]} validate="true" autoComplete="off" onSubmit={(event) => this.fetchIcon(event)} >
            <TextField
              id="standard-select-currency"
              select
              label="Search"
              onChange={(event) => this.setSearch(event)}
              style={{
                margin: '15px auto',
                display: 'inline-flex',
                width: '145px'
                }} >
              {this.state.iconFetchAll.map((name, key) => (
                  <MenuItem key={key} value={name}>
                    {name}
                  </MenuItem>
                ))}
            </TextField>

            <div className="searchControll">
            <input type="submit" value = "FETCH"></input>
            <input type="button" value = "DISPLAY" disabled={!this.state.displayControll} onClick={() => this.displayIcon()}></input>
            </div>
            
        </form>
        <div className="getAllIcons">
              <p>Click <IconButton color="secondary" aria-label="add an alarm" onClick={(event) => this.fetchIconAll(event)}>
                <RefreshIcon/>
              </IconButton>  to see all icons in database</p>
        </div>
        
      </div>
    );
  }
}

const VirtualMicrobit = () => {

  return (
      
      <Container className="IconPage" justify = "center">
          
          <div className="game">
              <div className="game-board">
                  <Board />
              </div>
              <div className="game-info">
                <Card >
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Tutorial of This Web Page
                    </Typography>
                    <Typography variant="body2" component="p">
                      Option 1: Click these squares to draw any icons you like. You can reset virtual pane by clicking <HighlightOffIcon/> icon
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                      Option 2: If you are satisfied with the icon you drew, you can save your icon to database. 
                      Before saving your icon, give a name and click VALIDATE button (name must be unique in database), then you can click SAVE button.
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                      Option 3: You can search icon in the database by names. Type a name and click SEARCH button.  
                      If icon you want to search exists, then click DISPLAY button. Icon will be rendered to virtual pane.
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                      Option 4: You can also download icon showed in virtual pane to real micro:bit device.
                      To do so, first need to pair your micro:bit device by clicking <BluetoothSearchingIcon/> icon. 
                      Once device is paired, click <ImportantDevicesIcon/> icon to light up icon from virtual pane to your real micro:bit device.
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                      <b>Important Note:</b> Before pairing the device, download and upload this <a href="https://drive.google.com/uc?id=0B2Ud_NaMFsQSdm1BMVMtN3F4a3c&export=download">firmware</a> on your BBC micro:bit board.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
          </div>
        
      </Container>
      
  );
};


export default VirtualMicrobit;
