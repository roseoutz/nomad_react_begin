import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [asset, setAsset] = useState(0);
    const [coin, setCoin] = useState({});

    const onChange = (event) => {
        if (coin != "") {
            setAsset(event.target.value)
        }
    }

    const onChangeCoin = (event) => {
        setCoin(event.target.value)
    }

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <h1>The Coins~! { loading ? "" : `(${coins.length})`}</h1>
            {
                loading ?
                    <strong>Loading...</strong> :
                    <select
                        onChange={onChangeCoin}
                    >
                        <option>Choose one...</option>
                        {coins.map(item => {
                            return <option
                                key={item.id}
                                value={item.quotes.USD.price}
                            >
                                {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
                            </option>
                        })}
                    </select>
            }
            <hr />
            <input
                type="number"
                value={asset}
                onChange={onChange}
                placeholder="How many do you have money..."
            />
            <h2>
                You can buy <b> {asset == 0 ? 0 : (asset / coin)}</b> {coin.name}
            </h2>
        </div>
    );
}

export default App;
