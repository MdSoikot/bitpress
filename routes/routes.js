const router = require('express').Router()
const axios = require('axios')
const integrationController = require('../controller/integrationController')
const fs = require('fs')
global.allIntegrations = require('../integrationDetails.json')
global.allPlans = require('../allPlans.json')



const products_card = {
    "bit_form": {
        "img_url": "/Assets/images/bit_form_logo.svg",
        "title": "Bit Form",
        "desc": "Your ultimate drag & drop and interactive form builder plugin in WordPress",
        "link":"https://wordpress.org/plugins/bit-form/"
    },
    "bit_integrator": {
        "img_url": "/Assets/images/bit_integrator_logo.svg",
        "title": "Bit Integrator",
        "desc": "An advanced integration platform to manage your business.",
        "link":"https://bitapps.pro/"

    },
    "bit_smtp": {
        "img_url": "/Assets/images/bitsmtp_logo.svg",
        "title": "Bit SMTP",
        "desc": "A WordPress Plugin to authenticate the mail service of your website.",
        "link":"https://wordpress.org/plugins/bit-smtp/#:~:text=Bit%20SMTP%20plugin%20allows%20you,email%20deliverability%20more%20easygoing%20%26%20reliable."

    },
    "inventory_woocommerce": {
        "img_url": "/Assets/images/ziw_Logo.svg",
        "title": "Zoho inventory With woocommerce",
        "desc": "A connector to Zoho Inventory with Woo Commerce.",
        'class': "inventory-woocommerce",
        "link":""

    },
    "crm_woocommerce": {
        "img_url": "/Assets/images/zcw_logo.svg",
        "title": "Zoho CRM With woocommerce",
        "desc": "A connector to Zoho CRM with Woo Commerce.",
        'class': "crm-woocommerce",
        "link":""


    }

}

const glance_item = {
    "menu": {
        "img_url": "/Assets/images/menu.svg",
        "title": "5 Apps",
    },
    "star": {
        "img_url": "/Assets/images/star.svg",
        "title": "20+",
        "desc": "5 Star Rating"
    },
    "setting": {
        "img_url": "/Assets/images/setting.svg",
        "title": "600+",
        "desc": "Active Installations"
    },
    "download": {
        "img_url": "/Assets/images/download-icon.svg",
        "title": "5000+",
        "desc": "App Downloads",
    },

}

const homepage_reviews = {
    "review1": {
        "client_name": "Paul J. Lange",
        "profile_img": "/Assets/images/reviews/Paul.J.Lange.png",
        "title": "",
        "content": "I’ve used so many different form plugins over the years. All of the majors and a few experimental ones.When I saw Bitform it was a total gamble and one that paid off!Although Bitform is still developing some of the more advanced functionality that the majors.....",
        "review_link": "https://wordpress.org/support/topic/bitform-rocks-woo-ninja-and-gravity-probably-didnt-see-this-coming/"
    },
    "review2": {
        "client_name": "dalibor",
        "profile_img": "/Assets/images/reviews/dalibor.png",
        "title": "",
        "content": "This plugin is really good. It will easily replace I would dare to say even Gravity Forms. This plugin has truly everything you need with ton of integrations and customizations for your own desired setting.What really amazed me was their AWESOME support!!!.....",
        "review_link": "https://wordpress.org/support/topic/great-plugin-amazing-support-135/"
    },
    "review3": {
        "client_name": "Patrick",
        "profile_img": "/Assets/images/reviews/Patrick.png",
        "title": "",
        "content": "Let’s face it. WordPress has no shortage of form plugins on the market. People have tons to choose from including many established forms. So why look at Bit Form?+ Amazing pricing is crazy good! + Features including things like payment gateways + Great Support.....",
        "review_link": ""
    },
    "review4": {
        "client_name": "Rovi Reti",
        "profile_img": "/Assets/images/reviews/Rovi_Reti.png",
        "title": "",
        "content": "I am amazed at the customer support of this company; way above the usual with other plugins. And on top of that, the product is extraordinary. If you haven’t bought it, I highly recommend it......",
        "review_link": ""
    },
    "review5": {
        "client_name": "L Cicerchia",
        "profile_img": "/Assets/images/reviews/L_Cicerchia.png",
        "title": "",
        "content": "Great contact form, one of the best I used. Lots of integrations and features, plus great support team......",
        "review_link": ""
    },
    "review6": {
        "client_name": "Terence Tay",
        "profile_img": "/Assets/images/reviews/Terence_Tray.png",
        "title": "",
        "content": "This form is to wordpress what butter is to bread. If you’re in the market for a form builder, something simple, light, easy to use, fast, feature packed, integrated, customisable and affordable, your search ends here.I love Bitform for the reasons stated.....",
        "review_link": ""
    },
}

const glance_item_integrator = {
    "menu": {
        "img_url": "/Assets/images/user.svg",
        "title": "100+",
        "desc": "Active Users"

    },
    "star": {
        "img_url": "/Assets/images/apps.svg",
        "title": "10+",
        "desc": "Apps"
    },
    "setting": {
        "img_url": "/Assets/images/build_integration.svg",
        "title": "15+",
        "desc": "Pre-built-integrations"
    },
    "download": {
        "img_url": "/Assets/images/active_integration.svg",
        "title": "100+",
        "desc": "Active Integrations",
    },

}

const features = {
    "drag_drop": {
        "img_url": "/Assets/images/features/drag_drop.svg",
        "title": "Drag & Drop Form Builder",
        "desc": "Build functional forms with just a few clicks without writing any code"
    },
    "responsive": {
        "img_url": "/Assets/images/features/responsive.svg",
        "title": "Responsive",
        "desc": "Build functional forms with just a few clicks without writing any code",
    },
    "conditional_logic": {
        "img_url": "/Assets/images/features/conditional_logic.svg",
        "title": "Conditional logic",
        "desc": "Build functional forms with just a few clicks without writing any code",
    },
    "integration": {
        "img_url": "/Assets/images/features/integration.svg",
        "title": "Integration",
        "desc": "Build functional forms with just a few clicks without writing any code",
        'class': "inventory-woocommerce"
    },
    "text_field": {
        "img_url": "/Assets/images/features/text_field.svg",
        "title": "Text Field Type",
        "desc": "Build functional forms with just a few clicks without writing any code",
        'class': "crm-woocommerce"

    },
    "export_import": {
        "img_url": "/Assets/images/features/export_import.svg",
        "title": "Export and import",
        "desc": "Build functional forms with just a few clicks without writing any code",
        'class': "crm-woocommerce"

    },
    "payment": {
        "img_url": "/Assets/images/features/payment.svg",
        "title": "Easy to pay",
        "desc": "Build functional forms with just a few clicks without writing any code",
        'class': "crm-woocommerce"

    },
    "file_upload": {
        "img_url": "/Assets/images/features/file_upload.svg",
        "title": "File upload",
        "desc": "Build functional forms with just a few clicks without writing any code",
        'class': "crm-woocommerce"

    },
    "crm_woocommerce": {
        "img_url": "/Assets/images/features/style.svg",
        "title": "Style",
        "desc": "Build functional forms with just a few clicks without writing any code",
        'class': "crm-woocommerce"

    },

}

// const secretkey = Buffer.from('bit5347593423integrator').toString('base64');

router.get('/', async (req, res) => {
    res.render('pages/index', { products_card, glance_item, homepage_reviews })
})

router.get('/bitform', (req, res) => {
    res.render('pages/bitform', { features,homepage_reviews })
})

router.get('/capturedata', async (req, res) => {

    const integrationData = await axios.get(`http://127.0.0.1:8000/api/all_integrations`)
        .then(res => res.data)
        .catch(err => {
            return err
        })

    const planData = await axios.get(`http://127.0.0.1:8000/api/all_plan_details/`)
        .then(res => res.data)
        .catch(err => {
            return err
        })
    const integrationToString = JSON.stringify(integrationData);
    const planToString = JSON.stringify(planData);
    fs.writeFile('./integrationDetails.json', integrationToString, (err) => {
        if (err) {
            return err
        } else {
            return 'Successfully wrote file'
        }
    })
    fs.writeFile('./allPlans.json', planToString, (err) => {
        if (err) {
            return err
        } else {
            return 'Successfully wrote file'
        }
    })
    res.send("successfully data fetched")
})

router.get('/bit-integrator', (req, res) => {
    res.render('pages/bitIntegrator', { glance_item_integrator, allIntegrations, allPlans })
})

router.get('/all-integrations', (req, res) => {
    res.render('pages/allIntegrations', { allIntegrations, allPlans })
})

router.get('/integration-details/:integrationId', integrationController.show)
router.get('/integration-request', (req, res) => {
    res.render('pages/integrationRequest', {})
})

router.get('/plugin', (req, res) => {
    res.render('pages/plugin', {})
})

router.get('/test', (req, res) => {
    const filters = req.query
    const filterData = allIntegrations.filter(item => {
        for (key in filters) {
            // return item[key] == filters[key]         
            return item.search != -1
        }
    })
    res.send(filterData)

})


module.exports = router

