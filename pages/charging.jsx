import styles from '../styles/Home.module.css'

export default function Charging() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Ford Pro Charging
            </h1>
            <p className={styles.description}>
                We are making commercial charging easy by providing simple charging solutions for any business to cost-effectively operate an electric fleet with utmost peace of mind.
            </p>

            <div className={styles.card}>
                <h2>Depot Charging</h2>
                <p>
                    We’re committed to providing our customers a turnkey solution for fleet depot charging. That starts with our acquisition of fleet charging provider, Electriphi, to lower energy and operational costs while offering a one-stop solution and rapid deployment for commercial and government EV customers.

                    Customers in North America can sign up for Electriphi charge management services now at Electriphi.

                    Additional information on Ford’s plans to integrate Electriphi’s charging installation and management capabilities with Ford Pro services is available here.
                </p>
            </div>

            <div className={styles.card}>
                <h2>Public Charging</h2>
                <p>
                    Put our global public charging networks to work for your business. Customers have access to America’s largest public charging network offered by automotive manufacturers with over 63,000 plugs, while European customers have access to over 150,000 charging points and IONITY fast-charging stations.
                </p>
            </div>

            <div className={styles.card}>
                <h2>Home Charging</h2>
                <p>
                    Employees can power up their vehicles from the comfort of their home with charging hardware and software that makes operations easy for drivers and fleet managers.
                </p>
            </div>
        </main>
    )
}