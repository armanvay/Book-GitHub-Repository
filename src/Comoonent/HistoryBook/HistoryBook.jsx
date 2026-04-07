import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from '../ListedCard/ReadList';
import WishList from '../ListedCard/WishList';

const HistoryBook = () => {
    return (
      <div className="container mx-auto mt-10">
        <Tabs>
          <TabList>
            <Tab>
              <p className="font-bold">ReadList</p>
            </Tab>
            <Tab>
              <p className='font-bold'>WishList</p>
            </Tab>
          </TabList>

          <TabPanel>
           <ReadList></ReadList>
          </TabPanel>
          <TabPanel>
          <WishList></WishList>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default HistoryBook;