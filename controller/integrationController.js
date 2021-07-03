const integrationController = {
    show: (req, res) => {
        let integDetails
        let planDetails
        allIntegrations.map(item => {
            if (item.id == req.params.integrationId) {
                integDetails = item
            }
        })

        allPlans.map(plans => {
            if (plans.integration_id == req.params.integrationId) {
                planDetails = plans
            }
        })
        res.render('pages/integrationDetails', { integDetails, planDetails })
    }
}

module.exports = integrationController