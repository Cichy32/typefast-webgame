const axios = require('axios')
const Words = require('../models/Words')

// TO DO
// Fix naming
// async function saveCreatedWords (wordsAmount){
//     const url = 'https://random-word-api.herokuapp.com/word?number='
//     const finalUrl = url+wordsAmount
    
//     const request = await axios.get(finalUrl)
//     const words = new Words({
//         words: request.data,
//         amount: wordsAmount
//     })
//     try {
//         const savedWords = await words.save()
//         return(savedWords)
//     } catch (error) {
//         return(error)
//     }
// }

// exports.createWords = async (req,res) =>{

//     const wordsAmount = req.params.amount
   
//     // console.log(saveCreatedWords(wordsAmount))
//     const response = await saveCreatedWords(wordsAmount)
//     res.json(response)   
// }

// exports.getAllWords = async (req,res) =>{

//     try {
//         const words = await Words.find().exec()
//         res.json(words)
//     } catch (error) {
//         res.json(error)   
//     }
// }

// exports.getWords = async (req,res) =>{
//     const wordsAmount = req.params.amount
//     try {
//         const words = await Words.find({amount:wordsAmount}).exec()
//         if(words.length === 0){
//             const response = await saveCreatedWords(wordsAmount)
//             res.json(response)
//         }else{
//             res.json(words)
//         }
//     } catch (error) {
//         res.json(error)   
//     }
// }