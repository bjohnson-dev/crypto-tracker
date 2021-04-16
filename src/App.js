// react
import React from 'react';
import { Component } from 'react';

// components
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'

// data
import portfolio from './data/portfolio_demo.js';

// gsap
import { gsap, Linear } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
gsap.registerPlugin(ExpoScaleEase, Linear, RoughEase, SlowMo);

class App extends Component {
	constructor(props) {
		super(props);

		this.activePortfolio = [];
		this.keyArray = [];
		this.mapArray = [];
		this.requestGridPath = null;
		this.requestGridData = [];
		this.requestCarouselPath = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
		this.requestCarouselData = [];

		// reference to the DOM nodes
		this.assetElements = [];
		this.nameElements = [];
		this.tickerElements = [];
		this.gainLossMarketElements = [];
		this.gainLossProfitElements = [];
		this.priceElements = [];
		this.purchaseValueElements = [];
		this.quantityElements = [];

		this.state = {
			gainLoss: 'profit',
			portfolioTotalValuation: 0,
			portfolioTotalInvestment: 0,
			portfolioTotalProfit: 0,
	
			// asset 0
			asset0Name: undefined,
			asset0Ticker: undefined,
			asset0CurrentGainLossMarket: null,
			asset0CurrentGainLossProfit: null,
			asset0CurrentPrice: null,
			asset0CurrentPurchaseValue: null,
			asset0CurrentQuantity: null,
			asset0LatestGainLossMarket: null,
			asset0LatestGainLossProfit: null,
			asset0LatestPrice: null,
			asset0LatestPurchaseValue: null,
			asset0LatestQuantity: null,	
	
			// asset 1
			asset1Name: undefined,
			asset1Ticker: undefined,
			asset1CurrentGainLossMarket: null,
			asset1CurrentGainLossProfit: null,
			asset1CurrentPrice: null,
			asset1CurrentPurchaseValue: null,
			asset1CurrentQuantity: null,
			asset1LatestGainLossMarket: null,
			asset1LatestGainLossProfit: null,
			asset1LatestPrice: null,
			asset1LatestPurchaseValue: null,
			asset1LatestQuantity: null,	
			
			// asset 2
			asset2Name: undefined,
			asset2Ticker: undefined,
			asset2CurrentGainLossMarket: null,
			asset2CurrentGainLossProfit: null,
			asset2CurrentPrice: null,
			asset2CurrentPurchaseValue: null,
			asset2CurrentQuantity: null,
			asset2LatestGainLossMarket: null,
			asset2LatestGainLossProfit: null,
			asset2LatestPrice: null,
			asset2LatestPurchaseValue: null,
			asset2LatestQuantity: null,	
			
			// asset 3
			asset3Name: undefined,
			asset3Ticker: undefined,
			asset3CurrentGainLossMarket: null,
			asset3CurrentGainLossProfit: null,
			asset3CurrentPrice: null,
			asset3CurrentPurchaseValue: null,
			asset3CurrentQuantity: null,
			asset3LatestGainLossMarket: null,
			asset3LatestGainLossProfit: null,
			asset3LatestPrice: null,
			asset3LatestPurchaseValue: null,
			asset3LatestQuantity: null,	
			
			// asset 4
			asset4Name: undefined,
			asset4Ticker: undefined,
			asset4CurrentGainLossMarket: null,
			asset4CurrentGainLossProfit: null,
			asset4CurrentPrice: null,
			asset4CurrentPurchaseValue: null,
			asset4CurrentQuantity: null,
			asset4LatestGainLossMarket: null,
			asset4LatestGainLossProfit: null,
			asset4LatestPrice: null,
			asset4LatestPurchaseValue: null,
			asset4LatestQuantity: null,	
	
			// asset 5
			asset5Name: undefined,
			asset5Ticker: undefined,
			asset5CurrentGainLossMarket: null,
			asset5CurrentGainLossProfit: null,
			asset5CurrentPrice: null,
			asset5CurrentPurchaseValue: null,
			asset5CurrentQuantity: null,
			asset5LatestGainLossMarket: null,
			asset5LatestGainLossProfit: null,
			asset5LatestPrice: null,
			asset5LatestPurchaseValue: null,
			asset5LatestQuantity: null,	
	
			// asset 6
			asset6Name: undefined,
			asset6Ticker: undefined,
			asset6CurrentGainLossMarket: null,
			asset6CurrentGainLossProfit: null,
			asset6CurrentPrice: null,
			asset6CurrentPurchaseValue: null,
			asset6CurrentQuantity: null,
			asset6LatestGainLossMarket: null,
			asset6LatestGainLossProfit: null,
			asset6LatestPrice: null,
			asset6LatestPurchaseValue: null,
			asset6LatestQuantity: null,
	
			// asset 7
			asset7Name: undefined,
			asset7Ticker: undefined,
			asset7CurrentGainLossMarket: null,
			asset7CurrentGainLossProfit: null,
			asset7CurrentPrice: null,
			asset7CurrentPurchaseValue: null,
			asset7CurrentQuantity: null,
			asset7LatestGainLossMarket: null,
			asset7LatestGainLossProfit: null,
			asset7LatestPrice: null,
			asset7LatestPurchaseValue: null,
			asset7LatestQuantity: null,	
			
			// asset 8
			asset8Name: undefined,
			asset8Ticker: undefined,
			asset8CurrentGainLossMarket: null,
			asset8CurrentGainLossProfit: null,
			asset8CurrentPrice: null,
			asset8CurrentPurchaseValue: null,
			asset8CurrentQuantity: null,
			asset8LatestGainLossMarket: null,
			asset8LatestGainLossProfit: null,
			asset8LatestPrice: null,
			asset8LatestPurchaseValue: null,
			asset8LatestQuantity: null,	
			
			// asset 9
			asset9Name: undefined,
			asset9Ticker: undefined,
			asset9CurrentGainLossMarket: null,
			asset9CurrentGainLossProfit: null,
			asset9CurrentPrice: null,
			asset9CurrentPurchaseValue: null,
			asset9CurrentQuantity: null,
			asset9LatestGainLossMarket: null,
			asset9LatestGainLossProfit: null,
			asset9LatestPrice: null,
			asset9LatestPurchaseValue: null,
			asset9LatestQuantity: null,	
			
			// asset 10
			asset10Name: undefined,
			asset10Ticker: undefined,
			asset10CurrentGainLossMarket: null,
			asset10CurrentGainLossProfit: null,
			asset10CurrentPrice: null,
			asset10CurrentPurchaseValue: null,
			asset10CurrentQuantity: null,
			asset10LatestGainLossMarket: null,
			asset10LatestGainLossProfit: null,
			asset10LatestPrice: null,
			asset10LatestPurchaseValue: null,
			asset10LatestQuantity: null,	
			
			// asset 11
			asset11Name: undefined,
			asset11Ticker: undefined,
			asset11CurrentGainLossMarket: null,
			asset11CurrentGainLossProfit: null,
			asset11CurrentPrice: null,
			asset11CurrentPurchaseValue: null,
			asset11CurrentQuantity: null,
			asset11LatestGainLossMarket: null,
			asset11LatestGainLossProfit: null,
			asset11LatestPrice: null,
			asset11LatestPurchaseValue: null,
			asset11LatestQuantity: null,			
	
			// footer carousel
			tickersCarousel: []

		};

		this.app = {
			/**
			 * Callback for post data being fetched.
			 * @callback postFetchCallback
			 */

			/**
			 * Fetch data from coingecko api.
			 * @param {Object} requestEndPoint - Constructor object which is assigned the coingecko api endpoint.
			 * @param {string} requestData - Constructor object (as a string) which will be assigned the fetched request data.
			 * @param {postFetchCallback} postFetch - An anonymous function that runs post fetching data / promise.
			 */
			fetchRequest: (requestEndPoint, requestData, postFetch) => {
				fetch(requestEndPoint)
					.then((response) => {
						return response.json()

					})
					.then((data) => {
						// sort data response assets by ticker "symbol" (lowercase & ascending order)
						data.sort((a, b) => {
							if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) { return -1; }
							if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) { return 1; }
							return 0;
						});

						// set sorted data to respective requestData index
						this[requestData] = data;

					})
					.then(() => {
						// if defined, post the data being fetch, this function will run
						if (postFetch !== undefined){
							postFetch();
						}
			
					})
					.catch((error) => {
						// as this is a personal app, a simple console log stating the error here
						console.log('Error Fetching Data: ' + error);

					});
			},

			/**
			 * Callback for post data set of header and grid.
			 * @callback setAppDataCallback
			 */

			/**
			 * Sets the initial data for header, main content (grid), and footer (carousel).
			 * @param {boolean} exeSetHeaderData - Boolean conditional to set / not set header data when executing function.
			 * @param {boolean} exeSetGridData - Boolean conditional to set / not set grid data when executing function.
			 * @param {boolean} exeSetFooterData - Boolean conditional to set / not set footer data when executing function.
			 * @param {setAppDataCallback} callback - A callback that runs once header and grid data have been set.
			 */
			setAppData: (exeSetHeaderData, exeSetGridData, exeSetFooterData, callback) => {
				const setHeaderData = () => {
					if (exeSetHeaderData){
						this.calculate.calcTotalValuation();
						this.calculate.calcTotalInvestment();
						this.calculate.calcTotalProfit();
					}
				}

				const setGridData = () => {
					if (exeSetGridData){
						const { activePortfolio, requestGridData, mapArray } = this;
						let initialState = {};
						
						for (let i = 0; i < activePortfolio.length; i++){
		
							// init current values (display values)
							const 
								assetName = mapArray[i].name,
								assetTicker = mapArray[i].ticker,
								assetCurrentGainLossMarket = mapArray[i].currentGainLossMarket,
								assetCurrentGainLossProfit = mapArray[i].currentGainLossProfit,
								assetCurrentPrice = mapArray[i].currentPrice,
								assetCurrentPurchaseValue = mapArray[i].currentPurchaseValue,
								assetCurrentQuantity = mapArray[i].currentQuantity;
		
								initialState[assetName] = activePortfolio[i].name;
								initialState[assetTicker] = activePortfolio[i].ticker;
								initialState[assetCurrentGainLossMarket] = parseFloat(requestGridData[i].price_change_percentage_24h.toPrecision(4));
								initialState[assetCurrentGainLossProfit] = this.calculate.calcGainLossProfit(i);
								initialState[assetCurrentPrice] = requestGridData[i].current_price.toPrecision(5);
								initialState[assetCurrentPurchaseValue] = this.calculate.calcPurchaseValue(i);
								initialState[assetCurrentQuantity] = (0).toPrecision(5);
		
		
							// init latest values (animation values)
							const
								assetLatestGainLossMarket = mapArray[i].latestGainLossMarket,
								assetLatestGainLossProfit = mapArray[i].latestGainLossProfit,
								assetLatestPrice = mapArray[i].latestPrice,
								assetLatestPurchaseValue = mapArray[i].latestPurchaseValue,
								assetLatestQuantity = mapArray[i].latestQuantity;
		
								initialState[assetLatestGainLossMarket] = parseFloat(requestGridData[i].price_change_percentage_24h.toPrecision(4));
								initialState[assetLatestGainLossProfit] = this.calculate.calcGainLossProfit(i);
								initialState[assetLatestPrice] = requestGridData[i].current_price.toPrecision(5);
								initialState[assetLatestPurchaseValue] = this.calculate.calcPurchaseValue(i);
								initialState[assetLatestQuantity] = this.calculate.calcQuantity(i);
						}
		
						this.setState(initialState, () => {
							for (let i = 0; i < activePortfolio.length; i++){
								this.app.transitionAssetGrid(false);
							}
		
							setHeaderData();
							callback();
						})
					}
				}

				const setFooterData = () => {
					if (exeSetFooterData){
						let tickersClone = [...this.state.tickersCarousel];
						for (let i = 0; i < tickersClone.length; i++){
							tickersClone[i].symbol = this.requestCarouselData[i].symbol.toUpperCase();
							tickersClone[i].price = this.requestCarouselData[i].current_price                    
						}
		
						this.setState({
							tickersCarousel: tickersClone
						})
					}
				}

				const setData = () => {
					setHeaderData();
					setGridData();
					setFooterData();
				}
				setData();

			},

			/**
			 * Callback for post data update of grid.
			 * @callback refreshAppDataCallback
			 */

			/**
			 * Updates data for header, main content (grid), and footer (carousel)
			 * @param {refreshAppDataCallback} callback - A callback that runs once grid data has been updated.
			 */
			refreshAppData: (callback) => {
				const { activePortfolio, requestGridPath, requestGridData, requestCarouselPath, mapArray } = this;


				this.app.fetchRequest(requestCarouselPath, 'requestCarouselData', () => { return this.app.setAppData(false, false, true, undefined) });
				this.app.fetchRequest(requestGridPath, 'requestGridData', () => { 
					let initialState = {};
					for (let i = 0; i < activePortfolio.length; i++){
						const
							assetCurrentGainLossMarket = mapArray[i].currentGainLossMarket,
							assetCurrentGainLossProfit = mapArray[i].currentGainLossProfit,
							assetCurrentPrice = mapArray[i].currentPrice;
			
						initialState[assetCurrentGainLossMarket] = parseFloat(requestGridData[i].price_change_percentage_24h.toPrecision(4));
						initialState[assetCurrentGainLossProfit] = this.calculate.calcGainLossProfit(i);
						if (requestGridData[i].current_price < 1){
							initialState[assetCurrentPrice] = requestGridData[i].current_price.toPrecision(3);
						} else {
							initialState[assetCurrentPrice] = requestGridData[i].current_price.toFixed(2);
						}
					}
			
					this.setState(initialState, () => {
						for (let i = 0; i < activePortfolio.length; i++){
							callback();
						}
						this.calculate.calcTotalValuation();
						this.calculate.calcTotalInvestment();
						this.calculate.calcTotalProfit();
					});
				});
			},

			/**
			 * Animtation that periodically transitions the dashboard asset view.
			 * @param {boolean} isStaggered - Boolean conditional to stagger / not stagger the transition animation when executing function.
			 */
			transitionAssetGrid: (isStaggered) => {
				const { state, mapArray } = this;
				const { assetElements, nameElements, tickerElements, gainLossMarketElements, gainLossProfitElements, priceElements, purchaseValueElements, quantityElements } = this;
				const tlAssets = gsap.timeline();
				const tlNames = gsap.timeline();
				const tlTickers = gsap.timeline();
				const tlMarkets = gsap.timeline();
				const tlProfits = gsap.timeline();
				const tlPrices = gsap.timeline();
				const tlPurchaseValues = gsap.timeline();
				const tlQuantities = gsap.timeline();
	
				let animationsArray = [];
	
				let durationVal;
				let staggerVal;
				let position;
	
				if (isStaggered){
					durationVal = .2;
					staggerVal = .25;
					position = null;
				} else {
					durationVal = 0;
					staggerVal = 'none';
					position = 0;
				}
	
				for (let i = 0; i < this.activePortfolio.length; i++){
					const assetLatestGainLossMarket = mapArray[i].currentGainLossMarket;
					const assetLatestGainLossProfit = mapArray[i].currentGainLossProfit;
					let assetColor = undefined;
					let assetColor2 = undefined;
					let assetColorAlt = undefined;
					let assetColorAlt2 = undefined;
	
					if (state[assetLatestGainLossMarket] !== undefined && state[assetLatestGainLossProfit] !== undefined){
						if (state.gainLoss === 'market'){
							if (state[assetLatestGainLossMarket] >= 10){
								assetColor = "var(--massive-gain)";
								assetColorAlt = "var(--massive-gain-alt)";
	
							} else if (state[assetLatestGainLossMarket] >= 5 && state[assetLatestGainLossMarket] < 10){
								assetColor = "var(--major-gain)";
								assetColorAlt = "var(--major-gain-alt)";
				
							} else if (state[assetLatestGainLossMarket] > 0 && state[assetLatestGainLossMarket] < 5){
								assetColor = "var(--minor-gain)";
								assetColorAlt = "var(--minor-gain-alt)";
				
							} else if (state[assetLatestGainLossMarket] === 0){
								assetColor = "var(--break-even)";
								assetColorAlt = "var(--break-even-alt)";
				
							} else if (state[assetLatestGainLossMarket] < 0 && state[assetLatestGainLossMarket] > -5){
								assetColor = "var(--minor-loss)";
								assetColorAlt = "var(--minor-loss-alt)";
				
							} else if (state[assetLatestGainLossMarket] <= -5 && state[assetLatestGainLossMarket] > -10){
								assetColor = "var(--major-loss)";
								assetColorAlt = "var(--major-loss-alt)";
				
							} else if (state[assetLatestGainLossMarket] <= -10){
								assetColor = "var(--massive-loss)";
								assetColorAlt = "var(--massive-loss-alt)";
	
							}
	
							if (isStaggered){
								tlAssets
									.to(assetElements[i], (durationVal/3), { backgroundColor: assetColor, stagger: staggerVal })
									.to(assetElements[i], (durationVal/3), { scale: .965, stagger: staggerVal })
									.to(assetElements[i], (durationVal/3), { scale: 1, stagger: staggerVal });
							} else {
								tlAssets.to(assetElements[i], durationVal, { backgroundColor: assetColor, stagger: staggerVal }, position);
							}
	
							tlNames.to(nameElements[i], durationVal, { color: "#fff", textShadow: ".090em .015em 0 var(--shadow-color-market)", stagger: staggerVal }, position);
							tlTickers.to(tickerElements[i], durationVal, { color: "#fff", textShadow: ".020em .015em 0 var(--shadow-color-market)", stagger: staggerVal }, position);
							tlMarkets.to(gainLossMarketElements[i], durationVal, { color: "#fff", textShadow: ".050em .015em 0 var(--shadow-color-market)", stagger: staggerVal }, position);
							tlProfits.to(gainLossProfitElements[i], durationVal, { color: "#fff", textShadow: ".050em .015em 0 var(--shadow-color-market)", stagger: staggerVal }, position);
							tlPrices.to(priceElements[i], durationVal, { color: "#fff", stagger: staggerVal }, position);
							tlPurchaseValues.to(purchaseValueElements[i], durationVal, { color: assetColorAlt, stagger: staggerVal }, position);
							tlQuantities.to(quantityElements[i], durationVal, { color: assetColorAlt, stagger: staggerVal }, position);
	
						} else if (state.gainLoss === 'profit') {			
							if (state[assetLatestGainLossProfit] > 0){
								assetColor = "var(--minor-gain)";
								assetColor2 = "var(--neutral)";
								assetColorAlt = "var(--neutral-alt)";
								assetColorAlt2 = "var(--neutral-alt2)";
					
							} else if (state[assetLatestGainLossProfit] === 0){
								assetColor = "var(--break-even)";
								assetColor2 = "var(--neutral)";
								assetColorAlt = "var(--neutral-alt)";
								assetColorAlt2 = "var(--neutral-alt2)";
			
							} else if (state[assetLatestGainLossProfit] < 0){
								assetColor = "var(--minor-loss)";
								assetColor2 = "var(--neutral)";
								assetColorAlt = "var(--neutral-alt)";
								assetColorAlt2 = "var(--neutral-alt2)";
			
							}
	
							if (isStaggered){
								tlAssets
									.to(assetElements[i], (durationVal/3), { backgroundColor: assetColor2, stagger: staggerVal })
									.to(assetElements[i], (durationVal/3), { scale: .965, stagger: staggerVal })
									.to(assetElements[i], (durationVal/3), { scale: 1, stagger: staggerVal });
	
							} else {
								tlAssets.to(assetElements[i], durationVal, { backgroundColor: assetColor2, stagger: staggerVal }, position);
							}
	
							tlNames.to(nameElements[i], durationVal, { color: assetColor, textShadow: "none", stagger: staggerVal }, position);
							tlTickers.to(tickerElements[i], durationVal, { color: assetColor, textShadow: ".020em .015em 0 var(--shadow-color-profit)", stagger: staggerVal }, position);
							tlMarkets.to(gainLossMarketElements[i], durationVal, { color: assetColorAlt2, textShadow: "none", stagger: staggerVal }, position);
							tlProfits.to(gainLossProfitElements[i], durationVal, { color: assetColorAlt2, textShadow: "none", stagger: staggerVal }, position);
							tlPrices.to(priceElements[i], durationVal, { color: assetColorAlt2, stagger: staggerVal }, position);
							tlPurchaseValues.to(purchaseValueElements[i], durationVal, { color: assetColorAlt, stagger: staggerVal }, position);
							tlQuantities.to(quantityElements[i], durationVal, { color: assetColorAlt, stagger: staggerVal }, position);
						}
					}
				}
	
				animationsArray.push(tlAssets);
				animationsArray.push(tlNames);
				animationsArray.push(tlTickers);
				animationsArray.push(tlMarkets);
				animationsArray.push(tlProfits);
				animationsArray.push(tlPrices);
				animationsArray.push(tlPurchaseValues);
				animationsArray.push(tlQuantities);
	
				return animationsArray
	
			},

			loadApp: () => {
				const element = this.assetElements;
				const min1024 = window.matchMedia('(min-width: 1024px)'); // 2 column grid 
				const min1400 = window.matchMedia('(min-width: 1400px)'); // 3 column grid 
				const min1900 = window.matchMedia('(min-width: 1900px)'); // 4 column grid
				const durationValues = [1.5, 1.75, 2, 2.25, 2.5];
				const translateValues = [-250, -225, -200, -175, -150, 150, 175, 200, 225, 250];
				const easeValues = [1, 2, 3, 4];
				const easeTypes = ['out', 'inOut']
			
				// util function
				const getRandomValue = (valueArray) => {
					const randomValue = valueArray[Math.floor(Math.random() * valueArray.length)];
					return randomValue
				}
				const getEase = (valueArray) => {
					const randomValue = valueArray[Math.floor(Math.random() * valueArray.length)];
					return randomValue
				}
			
				// callback function (post-animation animation)
				const postIntro = () => {
					const { gainLossMarketElements, gainLossProfitElements } = this;
					const tlSequence = gsap.timeline({ repeat: -1 });
		
					const switchGainLossState = () => {
						if (this.state.gainLoss === 'profit'){
							this.setState({ gainLoss: 'market' }, () => {
								this.app.transitionAssetGrid(true);
							});
						} else {
							this.setState({ gainLoss: 'profit' }, () => {
								this.app.transitionAssetGrid(true);
							});
						}
					}
		
					const counters = (currentValueIndex, latestValueIndex) => {
						const { state, mapArray } = this;
						for (let i = 0; i < this.activePortfolio.length; i++){
							const currentValueKey = mapArray[i][currentValueIndex];
							const latestValueKey = mapArray[i][latestValueIndex];
							const latestValueState = state[latestValueKey];
			
							const counterAnimation = (currentKey, newValue, duration) => {
								if (state[currentValueKey].toString() !== state[latestValueKey]){
									const tween = gsap.to(this, duration, { 
										nextNumber: newValue,
										ease: "Linear.easeNone",
										onUpdate: () => {
											let tempObj = {[currentKey]: this.nextNumber }
											this.setState(tempObj);
										}
									});
			
									return tween
								}
							}
							counterAnimation(currentValueKey, latestValueState, 5);
			
						}
					}
	
					const animateGainLoss = (elements) => {
						const tlCarousel = gsap.timeline();
							tlCarousel
								.to(elements, 1.5, { ease: 'linear', scale: 2, stagger: .25 })
								.to(elements, 15.5, { ease: 'slow(.9, 1.35, false)', left: '115%', stagger: .25 }, "<")
								.to(elements, 1.5, { opacity: 0, scale: 1, stagger: .25, x: 0 , clearProps: 'x,left,opacity' }, ">-3.75");
			
						return tlCarousel
			
					}
	
	
					tlSequence
						.add(counters('currentQuantity', 'latestQuantity'), 0)
						.add(animateGainLoss(gainLossProfitElements), "<.85")
						
						// 15 second calls
						.call(this.app.refreshAppData, [() => {
							switchGainLossState();
						}], 15)
						.add(animateGainLoss(gainLossMarketElements), "<.85")
						
						// 30 second calls
						.call(this.app.refreshAppData, [() => {
							switchGainLossState();
						}], 30)
						.add(animateGainLoss(gainLossProfitElements), "<.85")
		
						// 45 second calls
						.call(this.app.refreshAppData, [() => {
							switchGainLossState();
						}], 45)
						.add(animateGainLoss(gainLossMarketElements), "<.85")
		
						// 60 second calls
						.call(this.app.refreshAppData, [() => {
							if (this.state.gainLoss === 'profit'){
								this.setState({ gainLoss: 'market' }, () => {
									this.app.transitionAssetGrid(true);
								});
							} else {
								this.setState({ gainLoss: 'profit' }, () => {
									this.app.transitionAssetGrid(true);
								});
							}
						}], 60);
				}
	
			
				// create timeline
				let tlIntroSequence = gsap.timeline({onComplete: () => gsap.delayedCall(.5, postIntro) });
			
				// select intro animation based on screen width
				if (min1900.matches){
					// 4 column intro
					for (let i = 0; i < element.length; i++){
						tlIntroSequence.fromTo(element[i], {
							x: getRandomValue(translateValues) + 'vw',
							y: getRandomValue(translateValues) + 'vw',
						}, { 
							ease: 'power' + gsap.utils.random(1, 4, 1) + '.' + getEase(easeTypes),
							x: 0,
							y: 0,
							duration: "random([1.5, 1.75, 2, 2.25, 2.5])"
						}, "+0.5")
					}
				   
				} else if (min1400.matches){
					// 3 column intro
					const slideRightValues = [element[2], element[8]];
					const slideLeftValues = [element[3], element[9]];
					const otherValues = [element[0], element[1], element[4], element[5], element[6], element[7], element[10], element[11]];
			
					tlIntroSequence
						.add(() => {
							for (let i = 0; i < element.length; i++){
								gsap.fromTo(otherValues[i], {
									x: getRandomValue(translateValues) + 'vw',
									y: getRandomValue(translateValues) + 'vw'
								}, { 
									ease: 'power' + getRandomValue(easeValues) + '.' + getRandomValue(easeTypes),
									x: 0,
									y: 0,
									duration: getRandomValue(durationValues)
								}, 0)
							}
						})
						.fromTo(slideRightValues, { x: '-150vw' }, { ease: "easeOut", x: 0, y: 0, duration: 1.15, stagger: 0.35 })
						.fromTo(slideLeftValues, { x: '150vw' }, { ease: "easeOut", x: 0, y: 0, duration: .5, stagger: 0.65 });
			
				} else if (min1024.matches){
					// 2 column intro     
					const column1 = [];
					const column2 = [];
					
					for (let i = 0; i < element.length; i++){
						(i % 2) === 0 ? column1.push(element[i]) : column2.push(element[i]);
					}
			
					tlIntroSequence
						.fromTo(column2, { x: '-150vw' }, { ease: "easeOut", x: 0, y: 0, duration: 1.15, stagger: 0.25 })
						.fromTo(column1, { x: '150vw' }, { ease: "easeOut", x: 0, y: 0, duration: .5, stagger: 0.25 }, "+0.5");
			
				} else {
					// 1 column intro
					tlIntroSequence.fromTo(element, 1.2, { opacity: 0 }, { opacity: 1 });
			
				}
	
				gsap.fromTo('.slideshow', 1, { opacity:0 }, { delay: 9, opacity: 1 });
			}
		}

		this.calculate = {
			// calculate asset total loss or profit dollars (one of the rotating asset values)
			calcGainLossProfit: (i) => {
				const { requestGridData } = this;
				let assetGainLossProfit = 0;
	
				const profit = ((parseFloat(requestGridData[i].current_price.toPrecision(6))) * this.calculate.calcQuantity(i)) - this.calculate.calcPurchaseValue(i);
				assetGainLossProfit = parseFloat(profit.toPrecision(5));
				return assetGainLossProfit
			},
	
			// calculate asset total purchase value (asset background upper-left value)
			calcPurchaseValue: (i) => {
				const { activePortfolio } = this;
				let assetPurchaseValue = 0;
				
				for (let j = 0; j < activePortfolio[i].ledger.length; j++){
					let transactionTotal = activePortfolio[i].ledger[j].transactionValueFiat * activePortfolio[i].ledger[j].transactionValueCrypto;
	
					if (activePortfolio[i].ledger[j].transactionType === 'purchase'){
						assetPurchaseValue += transactionTotal;
					} else if (activePortfolio[i].ledger[j].transactionType === 'sell'){
						assetPurchaseValue -= transactionTotal;
					} else {
						assetPurchaseValue += 0;
					} 
				}
	
				if (assetPurchaseValue <= 0){ assetPurchaseValue = 0.00000 }			
				return assetPurchaseValue.toPrecision(6)
	
			},
	
			// calculate asset total quantity (asset background lower-left value)
			calcQuantity: (i) => {
				const { activePortfolio } = this;
				let assetQuantity = 0;
	
				for (let j = 0; j < activePortfolio[i].ledger.length; j++){
					if (activePortfolio[i].ledger[j].transactionType === 'purchase' || activePortfolio[i].ledger[j].transactionType === 'reward'){
						assetQuantity += activePortfolio[i].ledger[j].transactionValueCrypto;
					} else if (activePortfolio[i].ledger[j].transactionType === 'sell') {
						assetQuantity -= activePortfolio[i].ledger[j].transactionValueCrypto;
					} else if (activePortfolio[i].ledger[j].transactionType === 'transfer') {
						assetQuantity -= activePortfolio[i].ledger[j].transactionExchangeFee + activePortfolio[i].ledger[j].transactionBlockchainFee;
					} 
				}
	
				if (assetQuantity < 0){ assetQuantity = 0 }
				return assetQuantity.toPrecision(5)
			},
	
			// calculate total investment of 12 asset portfolio (header bar value)
			calcTotalInvestment: () => {
				let totalInvestment = 0;
				for (let i = 0; i < this.activePortfolio.length; i++){
					const purchaseValueKey = 'asset' + [i] + 'CurrentPurchaseValue';
					totalInvestment += parseFloat(this.state[purchaseValueKey]);
				}
		
				this.setState({ portfolioTotalInvestment: totalInvestment });
			},
	
			// calculate total profit of 12 asset portfolio (header bar value)
			calcTotalProfit: () => {
				let totalProfit = 0;
				for (let i = 0; i < this.activePortfolio.length; i++){
					const gainLossProfitKey = 'asset' + [i] + 'CurrentGainLossProfit';
					totalProfit += parseFloat(this.state[gainLossProfitKey]);
				}
		
				this.setState({ portfolioTotalProfit: totalProfit });
			},
	
			// calculate total value of the 12 asset portfolio (header bar value)
			calcTotalValuation: () => {
				let totalValuation = 0;
				for (let i = 0; i < this.activePortfolio.length; i++){
					const quantityKey = 'asset' + [i] + 'LatestQuantity';
					const priceKey = 'asset' + [i] + 'CurrentPrice';
					let value = parseFloat(this.state[quantityKey]) * parseFloat(this.state[priceKey])
					totalValuation += value;
				}
		
				this.setState({ portfolioTotalValuation: totalValuation });
			}
		}

		this.init = () => {
			// populates tickersCarousel array indexes with objects
			for (let i = 0; i < 100; i++){
				this.state.tickersCarousel[i] = { symbol: undefined, price: undefined };
			}

			// get active assets from portfolio and sort in acsending order
			this.preparePortfolio = (portfolio) => {
				// create copy of the imported portfolio array
				let portfolioClone = [...portfolio];
				let activePortfolio = [];
		
				// create array of active portfolio assets
				for (let i = 0; i < portfolioClone.length; i++){
					if (portfolioClone[i].isActive){
						activePortfolio.push(portfolioClone[i]);
					}
				}
		
				// sort active portfolio assets by ticker (ascending order)
				activePortfolio.sort((a, b) => {
					if (a.ticker < b.ticker) { return -1; }
					if (a.ticker > b.ticker) { return 1; }
					return 0;
				});
				
				// set App active portfolio
				// active porfolio = assets set to display in portfolio.js
				this.activePortfolio = activePortfolio;
				
			}

			// generates an array that used in the map function within the render function
			this.generateMapArray = () => {
				const mapArray = [];
				
				// function that generates an array of keys that exist in the App state
				const generateKeyArray = (identifier) => {
					const keyArray = [];
					
					for (let i = 0; i < 12; i++){
						keyArray.push("asset" + i + identifier);
					}
		
					return keyArray
				}
		
				// create arrays of keys that exist in the App state (e.g. "asset0Name", "asset6Ticker")
				const   
					names = generateKeyArray('Name'),
					tickers = generateKeyArray('Ticker'),
					currentGainLossMarkets = generateKeyArray('CurrentGainLossMarket'),
					currentGainLossProfits = generateKeyArray('CurrentGainLossProfit'),
					currentPrices = generateKeyArray('CurrentPrice'),
					currentPurchaseValues = generateKeyArray('CurrentPurchaseValue'),
					currentQuantities = generateKeyArray('CurrentQuantity'),
					latestGainLossMarkets = generateKeyArray('LatestGainLossMarket'),
					latestGainLossProfits = generateKeyArray('LatestGainLossProfit'),
					latestPrices = generateKeyArray('LatestPrice'),
					latestPurchaseValues = generateKeyArray('LatestPurchaseValue'),
					latestQuantities = generateKeyArray('LatestQuantity');
		
		
				// loops and creates a temporary object that is pushed to the empty mapArray
				// the temporary object aligns with the App state predefined keys
				for (let i = 0; i < 12; i++){
					const tempObj = {};
		
					tempObj.name = names[i];
					tempObj.ticker = tickers[i];
					tempObj.currentGainLossMarket = currentGainLossMarkets[i];
					tempObj.currentGainLossProfit = currentGainLossProfits[i];
					tempObj.currentPrice = currentPrices[i];
					tempObj.currentPurchaseValue = currentPurchaseValues[i];
					tempObj.currentQuantity = currentQuantities[i];
					tempObj.latestGainLossMarket = latestGainLossMarkets[i];
					tempObj.latestGainLossProfit = latestGainLossProfits[i];
					tempObj.latestPrice = latestPrices[i];
					tempObj.latestPurchaseValue = latestPurchaseValues[i];
					tempObj.latestQuantity = latestQuantities[i];            
					
					mapArray.push(tempObj);
		
				}
				
				// set App map array
				// this array is used in the map function within the render function below
				this.mapArray = mapArray;
		
			}

			// generates a request path for assets populated in the active portfolio to be fetched
			this.generaterequestEndPoint = () => {
				let assetIds = '';
		
				// generate a comma delimited list of assets from the active portfolio
				for (let i = 0; i < this.activePortfolio.length; i++) {
					assetIds += this.activePortfolio[i].id + ',';
				}
		
				// path used to request data specific to the 12 assets displayed on the dashboard
				this.requestGridPath = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + assetIds + "&order=market_cap_desc&per_page=100&page=1&sparkline=false";
			
			}

			this.preparePortfolio(portfolio);
			this.generateMapArray();
			this.generaterequestEndPoint();
		}
		this.init();
	}
	
	componentDidMount(){
		this.app.fetchRequest(this.requestGridPath, 'requestGridData', () => { return this.app.setAppData(true, true, false, this.app.loadApp) });
		this.app.fetchRequest(this.requestCarouselPath, 'requestCarouselData', () => { return this.app.setAppData(false, false, true, undefined) });
	}

    render(){
		const { state } = this;
        const { assetElements, nameElements, tickerElements, gainLossMarketElements, gainLossProfitElements, priceElements, purchaseValueElements, quantityElements } = this;


		/**
		 * Visually formats the Profit and Market Gain/Loss values.
		 * @param {Object} assetValue - State object of the asset value to be formatted.
		 * @param {string} valueType - String ('market' or 'profit') to determine how the asset value should be formatted.
		 */
		const formatGainLoss = (assetValue, valueType) => {		
			if (assetValue !== undefined){
				if(valueType === 'market'){
					if (assetValue > 0){
						return '+' + assetValue + '%'
	
					} else if (assetValue < 0) {
						return assetValue + '%'
	
					} else if (assetValue === 0){
						return 0 + '%'
						
					} else {
						return null
					}
	
				} else if (valueType === 'profit') {
					if (assetValue > 0){
						return '$' + parseFloat(assetValue).toFixed(2)
	
					} else if (assetValue < 0) {
						return '-$' + parseFloat(Math.abs(assetValue)).toFixed(2)
	
					} else if (assetValue === 0){
						return '$' + 0
	
					} else {
						return null
	
					}
				}
			}
		}

        return (
        	<div className="dashboard">
				<AppHeader
					portfolioTotalValuation={ this.state.portfolioTotalValuation }
					portfolioTotalInvestment={ this.state.portfolioTotalInvestment }
					portfolioTotalProfit={ this.state.portfolioTotalProfit } />
				<main>
					<div className="grid">
						{
							this.mapArray.map((asset, i) => (
								<section
									className="asset"
									key={ i }
									ref={div => assetElements[i] = div}>

									<div className="foreground">
										<h1 className="currency">
											<span className="name" ref={div => nameElements[i] = div}>{ state[asset.name] }</span>
											<span className="ticker" ref={div => tickerElements[i] = div}>{ state[asset.ticker] }</span>
										</h1>
										<span className="gain-loss" ref={div => gainLossMarketElements[i] = div}>
											{ formatGainLoss(state[asset.currentGainLossMarket], 'market') }
										</span>
										<span className="gain-loss" ref={div => gainLossProfitElements[i] = div}>
											{ formatGainLoss(state[asset.currentGainLossProfit], 'profit') }
										</span>
										<span className="price" ref={div => priceElements[i] = div}>{
											state[asset.currentPrice] === null ? null : 
												state[asset.currentPrice] >= 1 ? parseFloat(state[asset.currentPrice]).toFixed(2) : parseFloat(state[asset.currentPrice]).toPrecision(4)
										}</span>
									</div>
									<div className="background">
										<span className="purchase-value" ref={div => purchaseValueElements[i] = div}>{ 
											state[asset.currentPurchaseValue] === null ? null : parseFloat(state[asset.currentPurchaseValue]).toFixed(2)
										}</span>
										<span className="quantity" ref={div => quantityElements[i] = div}>{
												state[asset.currentQuantity] === null ? 
													null : state[asset.currentQuantity] >= 1000 ? 
														Math.round(state[asset.currentQuantity]) : state[asset.currentQuantity] % 1 === 0 ?
															parseFloat(state[asset.currentQuantity]).toFixed(1) : parseFloat(state[asset.currentQuantity]).toFixed(2)
										}</span>
									</div>
								</section>
							))
						}
					</div>
            	</main>
				<AppFooter tickerTop100={ this.state.tickersCarousel } />
        	</div>
        );
    }
}
export default App;
