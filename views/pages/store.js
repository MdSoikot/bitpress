// <% for(let i=0;i<=2;i++) { %>
//     <a href="integration-details/<%=allIntegrations[i].id%>">
//         <div class="integration-item">
//             <div class="item item-left">
//                 <div class="image">
//                     <img src=<%=allIntegrations[i].photo%> alt="file not found">
//                 </div>
//                 <div class="title">
//                     <%=allIntegrations[i].type.substring(0,allIntegrations[i].type.indexOf('-'))
//                         %>
//                 </div>
//             </div>

//             <div class="price">
//                 <span>
//                     <% let price='' ; let pricingDuration='' %>
//                         <% for(const item of allPlans){
//                             if(allIntegrations[i].id===item.integration_id){ price=item.price
//                             pricingDuration=item.pricing_duration }} %>
//                             $<%= price %>
//                 </span>
//                 <span>
//                     /<%= pricingDuration %>

//                 </span>
//             </div>
//             <div class="item item-right">
//                 <div class="image">
//                     <img src=<%=allIntegrations[i].photo2%> alt="file not found">
//                 </div>
//                 <div class="title">
//                     <%= allIntegrations[i].type.substring(allIntegrations[i].type.indexOf('-')+1,allIntegrations[i].type.length)
//                         %>
//                 </div>
//             </div>
//         </div>
//     </a>
//     <%}%>




{/* <script>
const allIntegrations = JSON.parse('<%- JSON.stringify(allIntegrations) %>');
const allPlans = JSON.parse('<%- JSON.stringify(allPlans) %>');
const searchBar = document.getElementById('searchBar')

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value
    const filteredCharacters = allIntegrations.filter(character => {
        return (
            character.type.includes(searchString)
        )
    })
    showView(filteredCharacters)
})
let addIntegration = document.getElementById('addIntegration')
const showView = (data) => {
    const htmlString = data.map(item => {
        return `
<a href="integration-details/${item.id}">
<div class="integration-item">
<div class="item item-left">
<div class="image">
    <img src="${item.photo}" alt="file not found">
</div>
<div class="title">
    ${item.type.substring(0, item.type.indexOf('-'))}
</div>
</div>

<div class="price">
<span>
    ${(() => {
                let price = '';
                for (const plan of allPlans) {
                    if (item.id === plan.integration_id) {
                        price = plan.price
                        return "$" + price
                    }
                }
            })()}

</span>
<span>       ${(() => {
                let pricingDuration = ''
                for (const plan of allPlans) {
                    if (item.id === plan.integration_id) {
                        pricingDuration = plan.pricing_duration
                        return "/" + pricingDuration
                    }
                }
            })()}
</span>
</div>
<div class="item item-right">
<div class="image">
    <img src="${item.photo2}" alt="file not found">
</div>
<div class="title">
    ${item.type.substring(item.type.indexOf('-') + 1, item.type.length)
            }
</div>
</div>
</div>
</a>`
    }).join('');
    addIntegration.innerHTML = htmlString;
}

showView(allIntegrations)



</script> */}



// return `
// <a href="integration-details/${allIntegrations[i].id}">
//     <div class="integration-item">
//         <div class="item item-left">
//             <div class="image">
//                 <img src="${allIntegrations[i].photo}" alt="file not found">
//             </div>
//             <div class="title">
//                 ${allIntegrations[i].type.substring(0, allIntegrations[i].type.indexOf('-'))}
//             </div>
//         </div>

//         <div class="price">
//             <span>
//                 ${(() => {
//                                         let price = '';
//                                         for (const plan of allPlans) {
//                                             if (allIntegrations[i].id === plan.integration_id) {
//                                                 price = plan.price
//                                                 return "$" + price
//                                             }
//                                         }
//                                     })()}
         
//             </span>
//             <span>       ${(() => {
//                                         let pricingDuration = ''
//                                         for (const plan of allPlans) {
//                                             if (allIntegrations[i].id === plan.integration_id) {
//                                                 pricingDuration = plan.pricing_duration
//                                                 return "/" + pricingDuration
//                                             }
//                                         }
//                                     })()}
//             </span>
//         </div>
//         <div class="item item-right">
//             <div class="image">
//                 <img src="${allIntegrations[i].photo2}" alt="file not found">
//             </div>
//             <div class="title">
//                 ${allIntegrations[i].type.substring(allIntegrations[i].type.indexOf('-') + 1, allIntegrations[i].type.length)
//                                     }
//             </div>
//         </div>
//     </div>
// </a>`



// <!-- <script>
// const allIntegrations = JSON.parse('<%- JSON.stringify(allIntegrations) %>');
// const allPlans = JSON.parse('<%- JSON.stringify(allPlans) %>');
// const searchBar = document.getElementById('searchBar')

// searchBar.addEventListener("keyup", (e) => {
//     const searchString = e.target.value
//     const filteredCharacters = allIntegrations.filter(character => {
//         return (
//             character.type.includes(searchString)
//         )
//     })
//     showView(filteredCharacters)
// })
// let addIntegration = document.getElementById('addIntegration')
// let htmlString
// const showView = (data) => {
//     htmlString = data.map(item => {
//         return `
// <a href="integration-details/${item.id}">
// <div class="integration-item">
// <div class="item item-left">
// <div class="image">
//     <img src="${item.photo}" alt="file not found">
// </div>
// <div class="title">
//     ${item.type.substring(0, item.type.indexOf('-'))}
// </div>
// </div>

// <div class="price">
// <span>
//     ${(() => {
//                 let price = '';
//                 for (const plan of allPlans) {
//                     if (item.id === plan.integration_id) {
//                         price = plan.price
//                         return "$" + price
//                     }
//                 }
//             })()}

// </span>
// <span>       ${(() => {
//                 let pricingDuration = ''
//                 for (const plan of allPlans) {
//                     if (item.id === plan.integration_id) {
//                         pricingDuration = plan.pricing_duration
//                         return "/" + pricingDuration
//                     }
//                 }
//             })()}
// </span>
// </div>
// <div class="item item-right">
// <div class="image">
//     <img src="${item.photo2}" alt="file not found">
// </div>
// <div class="title">
//     ${item.type.substring(item.type.indexOf('-') + 1, item.type.length)
//             }
// </div>
// </div>
// </div>
// </a>`
//     }).join('');
//     addIntegration.innerHTML = htmlString;
// }

// showView(allIntegrations)



// </script> 