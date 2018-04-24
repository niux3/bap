/*
                                  __......._    _..--._,--._
                            _.--''  , ,:   :``-/  :.` (-`,o)``-._
                         ,-'`::.      ::  .: ` `-._    `--' :. __\
                      ,-':   `::  `   :: ,:;     . \  :.  _.-''  /
                    ,'  `:.`  ::. ,   `:.::.  ,  `: `. _,' . ` ,`
                 _,' `   `:.  `::       `::;     ,    ` __.,.-`
 `-._         _,'  `:   .-::-.  ::  `    ,:  ,' /. )-'''
  `  ``--.._,'`:._  `:.     ,: \ `:.___.,::..--/: / /
      . _.-'    _.--'``--''`'`.:\'''-`------..( `(._`._____.....---
-..___,'`:_..-''   -  _   -.  _\.`.      -     `:.`.       ,`
    ,:. ,'---...._______  ,     \_.`. -=    `  , `..\ ,  -     .-  _
   /  ,'    ___         ```````---`,)'-------....._).`.____,.__....---
  :  :    ,',-.:.                                  `'`'
  |  |   ( (   \ \  author : Renaud Bourdeau
  ::.:    `.:, /./  email : renaudbourdeau@gmail.com
   `. `-..__..' /
     `-.::__.:-'
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './react-components/elements/nav.js';
import Home from './react-components/views/home.js';
import Buildings from './react-components/views/buildings.js';
import NoMatch from './react-components/views/noMatch.js';
import { HashRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <HashRouter>
        <div>
            <Nav />
            <main>
                <section className="global">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/building/show/:id" component={Buildings} />
                        <Route component={NoMatch} />
                    </Switch>
                </section>
            </main>
        </div>
    </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
