const NFTs = () => {
    return ( 
        `
        <header class="header">
        <div class="search-box">
            <label for="search">
                <i class="far fa-search fa-lg"></i>
            </label>
            <input type="text" name="" id="search" class="search-input" placeholder="Search NFTs">
            <button class="filter-btn">
                <i class="far fa-sliders-h"></i>
            </button>
        </div>
        <div class="account-manage">
            <button class="square">
                <i class="far fa-comment-alt-lines"></i>
            </button>
            <button class="square">
                <i class="far fa-bell"></i>
            </button>
            <button class="square">
                <img src="https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all"
                    alt="">
            </button>
        </div>
    </header>
    <div class="page-content">
        <div class="right-content">
            <div class="wallet">
                <h1>My Wallet</h1>
                <p class="nft-type">Recommended</p>
                <div class="cart">
                    <div class="circles">
                        <span class="circle fill"></span>
                        <span class="circle "></span>
                    </div>
                    <div class="cart-number">
                        <p>Cart Number</p>
                        <h3 class="cart-num">3829 4820 4629 5025</h3>
                    </div>
                    <div class="cart-inf">
                        <div class="cart-name">
                            <p>Cart Holder Name</p>
                            <p class="name">AR Shakir</p>
                        </div>
                        <div class="cart-name">
                            <p>vaid thru</p>
                            <p class="date">09/24</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overview">
                <h1>Overview</h1>
                <div class="cart">
                    <p>Available balance in USD</p>
                    <h3 class="balance">213,150.15</h3>
                    <div class="transaction-wallet">
                        <div class="transaction">
                            <p>Transaction</p>
                            <p class="t-num">34,405</p>
                        </div>
                        <div class="wallet">
                            <p>wallet</p>
                            <p class="v-num">23</p>
                        </div>
                    </div>
                    <p>Last activity at 26 nov, 2021</p>
                </div>
            </div>
            <div class="coins-wallets">
                <div class="coin-wallet">
                    <p class="coin-wallet-name">BTC Wallet</p>
                    <p class="wallet-amount">4.434953 <span class="coin-name">BTC</span></p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png" alt="">
                </div>
                <div class="coin-wallet">
                    <p class="coin-wallet-name">Etherium Wallet</p>
                    <p class="wallet-amount">4.434953 <span class="coin-name">ETH</span></p>
                    <img src="https://cdn.freelogovectors.net/svg05/ethereum-logo.svg" alt="">
                </div>
            </div>
        </div>
        <div class="main-content">
            <h1>Recently Added NFTs</h1>
            <div class="tab-bar">
                <button>Recommended</button>
                <button>New Tredns</button>
                <button>Multi Colors</button>
            </div>
            <div class="nfts">
                <div class="nft-item">
                    <div class="nft-img">
                        <img src="https://i.pinimg.com/originals/02/07/18/020718aeefe763c45379a034ee83c40e.jpg"
                            alt="">
                    </div>
                    <p class="nft-name">Universe</p>
                    <p class="nft-type">Recommended</p>
                </div>
                <div class="nft-item">
                    <div class="nft-img">
                        <img src="https://www.enwallpaper.com/wp-content/uploads/cbb2e0e424801f381df0a14b4f599016.jpg"
                            alt="">
                    </div>
                    <p class="nft-name">Dying Star</p>
                    <p class="nft-type">Recommended</p>
                </div>
                <div class="nft-item">
                    <div class="nft-img">
                        <img src="https://i.pinimg.com/originals/1d/2b/91/1d2b916a3a8f092a76894a89ea6d3cdc.jpg"
                            alt="">
                    </div>
                    <p class="nft-name">Far Far Away</p>
                    <p class="nft-type">Recommended</p>
                </div>
            </div>
        </div>
    </div>
        `
     );
}
 
export default NFTs;