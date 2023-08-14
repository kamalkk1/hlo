import Card from './components/Card';
import './App.css';
function App() {
let myPrices = [
  {
    plan: "Basic plan",
    price: "$10/mth",
    bill: "Billed annually",
    features: [
      {
        name: "Access to all basic features",
        isEnabled: true
      },
      {
        name: "Basic reporting and analytics",
        isEnabled: true
      },
      {
        name: "Up to 10 individual users",
        isEnabled: true
      },
      {
        name: "20GB individual data each user",
        isEnabled: true
      },
      {
        name: "Basic chat and email support",
        isEnabled: false
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: false
      },
      {
        name: "Free Subdomain",
        isEnabled: false
      },
      {
        name: "Monthly Status Reports",
        isEnabled: false
      }
    ]
  },
  {
    plan: "Business plan",
    price: "$20/mth",
    bill: "Billed annually",
    features: [
      {
        name: "200+ integrations",
        isEnabled: true
      },
      {
        name: "Advanced reporting and analytics",
        isEnabled: true
      },
      {
        name: "Up to 20 individual users",
        isEnabled: true
      },
      {
        name: "40GB individual data each user",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled:true        },
      {
        name: "Free Subdomain",
        isEnabled:true        },
      {
        name: "Monthly Status Reports",
        isEnabled: false        }
    ]
  },
  {
    plan:"Enterprise plan",
    price: "$40/mth",
    bill: "Billed annually",
    features: [
      {
        name: "Advanced custom fields",
        isEnabled: true
      },
      {
        name: "Audit log and data history",
        isEnabled: true
      },
      {
        name: "Unlimited individual users",
        isEnabled: true
      },
      {
        name: "Unlimited individual data",
        isEnabled: true
      },
      {
        name: "Personalised priority service",
        isEnabled: true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: true
      },
      {
        name: "Free Subdomain",
        isEnabled: true
      },
      {
        name: "Monthly Status Reports",
        isEnabled: true
      }
    ]
  }
]
 return (
    <>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {
                myPrices.map( (obj) =>{return<Card data={obj}></Card>})   // store data in myPrices map to card 
              }
            </div>
          </div>
        </section>
    </>
  );
}

export default App;
