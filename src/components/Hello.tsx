/**
 * Created by wyf on 2017/2/27.
 */

import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
/*
 export class Hello extends React.Component<HelloProps, undefined> {
 render(){
 return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
 }
 }*/