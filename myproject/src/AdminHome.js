import './AdminHome.css';

export default function AdminHome() {
    return (
        <>
            <main>
                <span class="orderhead">
                    Order Details:
                </span>
                <div class="order">
                    <div class="ordercircle" id="totalorder">
                        <span>25</span>
                    </div>
                    <span>
                        Total order
                    </span>
                </div>
                <div class="order">
                    <div class="ordercircle" id="runorder">
                        <span>17</span>
                    </div>
                    <span>
                        Running Order
                    </span>
                </div>
                <div class="order">
                    <div class="ordercircle" id="panorder">
                        <span>08</span>
                    </div>
                    <span>
                        Panding order
                    </span>
                </div>
            </main>
            <aside>
                <span class="orderhead">
                    Notification :
                </span>
                <div class="notificationb">
                    <span>Customer Name : </span>
                    <p>hi dbfjhb dfjkd hgdfh gsdhgv agsdf jsdfb hsfdsa d jdbfhsdgf gfasdg kdfhgkj hsgfdh skdfh </p>
                    <button>View</button>
                </div>
                <div class="notificationb">
                    <span>Customer Name : </span>
                    <p>hi dbfjhb dfjkd hgdfh gsdhgv agsdf jsdfb hsfdsa d jdbfhsdgf gfasdg kdfhgkj hsgfdh skdfh </p>
                    <button>View</button>
                </div>
            </aside>
        </>
    )
}