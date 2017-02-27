/**
 * Created by wyf on 2017/2/27.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Hello = function (props) { return React.createElement("h1", null,
    "Hello from ",
    props.compiler,
    " and ",
    props.framework,
    "!"); };
/*
 export class Hello extends React.Component<HelloProps, undefined> {
 render(){
 return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
 }
 }*/ 
//# sourceMappingURL=Hello.js.map