import React from 'react';
import Konva from 'konva';
import CanvasDraw from "react-canvas-draw";

import './App.css'

class App extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			drawActivated: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			drawActivated: true
		})
	}
	render() {
		var stage = new Konva.Stage({
			container : "field-container",
			width : window.innerWidth,
			height : window.innerHeight,
			x: 50,
			y: 150,
			centeredScaling: true,
		});
		var layer = new Konva.Layer();
		stage.add(layer);

		Konva.Image.fromURL(require('./img/field-1400x700.png'), function(image) {
				layer.add(image);
				layer.draw();
		})

		Konva.Image.fromURL(require('./img/blue-circle-big-plus.png'), function(image) {
			image.setAttrs({
					x: 640,
					y: -75,
					name: "blue-circle-plus"
			});
			layer.add(image);
			layer.draw();
		})

		Konva.Image.fromURL(require('./img/red-circle-big-plus.png'), function(image) {
			image.setAttrs({
					x: 570,
					y: -75,
					name: "red-circle-plus"
			});
			layer.add(image);
			layer.draw();
		})

		Konva.Image.fromURL(require('./img/draw-on-click.png'), function(image) {
			image.setAttrs({
					x: 950,
					y: -80,
					name: "draw"
			});
			layer.add(image);
			layer.draw();
		})
		
		Konva.Image.fromURL(require('./img/remove-on-click.png'), function(image) {
			image.setAttrs({
					x: 750,
					y: -80,
					name: "remove"
			});
			layer.add(image);
			layer.draw();
		})

		stage.on('click',function(e) {
			var node = e.target;
			var isImage = (node.className === 'Image')
			if (isImage && node.attrs.name === 'blue-circle-plus') {
				Konva.Image.fromURL(require('./img/blue-circle-big.png'), function(image) {
					image.setAttrs({
							draggable: true,
							x: 688,
							y: 100
					});
					layer.add(image);
					layer.draw();
				})
			} else if (isImage && node.attrs.name === 'red-circle-plus') {
				Konva.Image.fromURL(require('./img/red-circle-big.png'), function(image) {
					image.setAttrs({
							draggable: true,
							x: 688,
							y: 100
					});
					layer.add(image);
					layer.draw();
				})
			} else if (isImage && node.attrs.name === 'draw') {
				this.handleClick()
			}
		})

		return (
			<div>
				<CanvasDraw canvasWidth="100%" canvasHeight="100%"/>
			</div>
			
		);
	}
}

export default App;
