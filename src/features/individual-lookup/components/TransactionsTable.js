import PageContainer from "../../common/components/PageContainer";
import { format } from "date-fns";
import { Button } from "../../common/components/Button";
import { ExpandIcon } from "../../common/components/Icons";

const TransactionsTable = ({ data = [], onSeeAllPayments = undefined }) => {
  return data.length > 0 ? (
    <div className="has-background-white">
      <PageContainer style={{ paddingBottom: "10px" }}>
        <h1 className="lookup-result-header mb-3">
          Last {data.length} Payments
        </h1>
        <div className="last-10-payments-list">
          <table className="table">
            <thead>
              <tr>
                <th>Week Beginning</th>
                <th className="has-text-right">Charge</th>
                <th className="has-text-right">Paid</th>
                <th className="has-text-right">HB Cont.</th>
                <th className="has-text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((transactionItem) => {
                return (
                  <tr key={transactionItem.id}>
                    <td style={{ width: "40%" }}>
                      {format(
                        new Date(transactionItem.weekBeginning),
                        "dd/MM/yyyy"
                      )}
                    </td>
                    <td className="has-text-right error-item">
                      £{transactionItem.totalCharged}
                    </td>
                    <td className="has-text-right">
                      £{transactionItem.totalPaid}
                    </td>
                    <td className="has-text-right">
                      £{transactionItem.totalHB}
                    </td>
                    <td className="has-text-right">
                      £{transactionItem.weekBalance}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {onSeeAllPayments ? (
            <div className="has-text-centered">
              <Button Icon={ExpandIcon} onClick={onSeeAllPayments}>
                SEE ALL PAYMENTS AND ARREARS
              </Button>
            </div>
          ) : null}
        </div>
      </PageContainer>
    </div>
  ) : null;
};

export default TransactionsTable;
