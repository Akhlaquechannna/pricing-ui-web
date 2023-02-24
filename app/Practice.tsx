import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Practice() {
  return (
    <>
      <h1 style={{ color: "blue", fontSize: "20px" }}>hello by h1</h1>
      <h2>world by h2</h2>
      <p>This is a Pragraph</p>
      <Heading>This is default heading by chakra</Heading>
      <Heading as="h1" color="red" fontSize="48">
        This is heading by chakra
      </Heading>
      <Heading as="h3" color={"blue"}>
        This is heading h3 by chakra
      </Heading>
      <Text fontWeight="bold">this is chakra paragraph</Text>
      <Heading>Flexbox in HTML/CSS</Heading>
      <div style={{ color: "white",
       display: "flex",
        justifyContent: "center",
        alignItems:'center',
        backgroundColor: 'green',
        height:'500px' }}>
          
        <div style={{ backgroundColor: "red", padding: "50px", height: '100px' }}>div1</div>
        <div style={{ backgroundColor: "blue", padding: "50px", height: '100px' }}>div2</div>
        <div style={{ backgroundColor: "orange", padding: "50px", height: '100px' }}>div3</div>
      </div>
    </>
  );
}
