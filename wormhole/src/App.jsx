import WormholeBridge from '@wormhole-foundation/wormhole-connect';
function App() {
  return (
    <div className="worm" > 
   
    <WormholeBridge config={{"env":"testnet","mode":"dark","cta":{"text":"completed","link":"https://www.sleeplessai.net"},
    "pageHeader":"CRYPTONIUM EXCHANGE","showHamburgerMenu":false}} />
     </div>
  );
}

export default App
