//U6899-7808
//Step 2: JavaScript Implementation
function main() {
    d3.csv('../purchase_orders.csv', d3.autoType).then(
        function (d) {
            for (let index = 0; index < d.length; index++) {
                const element = d[index];
                const unorderedList = d3.select('body').selectAll('ul')
                unorderedList.selectAll('li')
                    .data(d)
                    .enter()
                    .append("li")
                    .text(function (d){
                                return `${d.customerName} - ${d.orderId}: ${d.purchaseAmount}`
                    })
            }
        }
    )
}