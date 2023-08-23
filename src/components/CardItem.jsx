/* eslint-disable no-unused-vars */
import { Card, Text, Metric, Flex, BadgeDelta } from "@tremor/react";
import React from "react";

const CardItem = () => {
  return (
    <div>
      <Card className="w-xs" decoration="top" decorationColor="indigo">
        <Flex justifyContent="between" alignItems="center">
          <Text>Sales</Text>
          <BadgeDelta deltaType="moderateIncrease">+12.5%</BadgeDelta>
        </Flex>
        <Metric>$ 34,743</Metric>
      </Card>
    </div>
  );
};

export default CardItem;
