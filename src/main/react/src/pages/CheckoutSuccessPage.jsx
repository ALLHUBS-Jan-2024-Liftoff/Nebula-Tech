import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f6f9fc", minHeight: "100vh" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "600px",
            width: "100%",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#535f7f",
              fontWeight: "600",
            }}
          >
            SUCCESS!
          </h1>
          <Link
            to="/"
            style={{
              padding: "10px 30px",
              backgroundColor: "#625afa",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "500",
              textDecoration: "none",
              borderRadius: "7px",
            }}
          >
            Go to Home
          </Link>
        </header>
        <table
          bgcolor="#f6f9fc"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          width="100%"
          style={{ border: 0, margin: 0, padding: 0 }}
        >
          <tbody>
            <tr>
              <td style={{ border: 0, margin: 0, padding: 0 }}>
                {/* Wrapper */}
                <table
                  align="center"
                  bgcolor="#ffffff"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width={600}
                  style={{
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    margin: "0 auto",
                    minWidth: 600,
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ border: 0, margin: 0, padding: 0 }}>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width={600}
                          style={{ minWidth: 600 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                height={0}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  color: "#ffffff",
                                  display: "none !important",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 0,
                                  maxWidth: 0,
                                  msoHide: "all !important",
                                  opacity: 0,
                                  overflow: "hidden",
                                  visibility: "hidden",
                                }}
                              >
                                <span
                                  style={{
                                    color: "#ffffff",
                                    textDecoration: "none",
                                  }}
                                >
                                  Receipt from acct_1FGdhVHMnpUaEabv
                                  [#1258-5785] Amount paid ${" "}
                                  {(
                                    JSON.parse(
                                      sessionStorage.getItem("itineraCheckout")
                                    ).price / 100
                                  ).toFixed(2)}{" "}
                                  Date paid{" "}
                                  {new Date().toLocaleString("en-US", {
                                    month: "short",
                                    day: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                    hour12: true,
                                  })}
                                  {/* Prevents elements showing up in email client preheader text, fyi https://parcel.io/blog/preheader-spacing */}
                                  ­ &nbsp;
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ backgroundColor: "#f6f9fc" }}>
                          <table
                            dir="ltr"
                            width="100%"
                            style={{
                              border: 0,
                              borderCollapse: "collapse",
                              margin: 0,
                              padding: 0,
                              backgroundColor: "#ffffff",
                            }}
                          >
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#525F7F",
                                    border: 0,
                                    borderCollapse: "collapse",
                                    margin: 0,
                                    padding: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    MozOsxFontSmoothing: "grayscale",
                                    fontSize: 0,
                                    lineHeight: 0,
                                    msoLineHeightRule: "exactly",
                                    backgroundSize: "100% 100%",
                                    borderTopLeftRadius: 5,
                                  }}
                                  align="right"
                                  height={156}
                                  valign="bottom"
                                  width={252}
                                >
                                  <a
                                    href=""
                                    target="_blank"
                                    style={{
                                      WebkitFontSmoothing: "antialiased",
                                      MozOsxFontSmoothing: "grayscale",
                                      outline: 0,
                                      textDecoration: "none",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      height={156}
                                      width={252}
                                      src="https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Left.png"
                                      style={{
                                        display: "block",
                                        border: 0,
                                        lineHeight: "100%",
                                        width: "100%",
                                      }}
                                    />
                                  </a>
                                </td>
                                <td
                                  style={{
                                    backgroundColor: "#525F7F",
                                    border: 0,
                                    borderCollapse: "collapse",
                                    margin: 0,
                                    padding: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    MozOsxFontSmoothing: "grayscale",
                                    fontSize: 0,
                                    lineHeight: 0,
                                    msoLineHeightRule: "exactly",
                                    backgroundSize: "100% 100%",
                                    width: "96px !important",
                                  }}
                                  align="center"
                                  height={156}
                                  valign="bottom"
                                >
                                  <a
                                    href=""
                                    target="_blank"
                                    style={{
                                      WebkitFontSmoothing: "antialiased",
                                      MozOsxFontSmoothing: "grayscale",
                                      outline: 0,
                                      textDecoration: "none",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      height={156}
                                      width={96}
                                      src="https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Icon--empty.png"
                                      style={{
                                        display: "block",
                                        border: 0,
                                        lineHeight: "100%",
                                      }}
                                    />
                                  </a>
                                </td>
                                <td
                                  style={{
                                    backgroundColor: "#525F7F",
                                    border: 0,
                                    borderCollapse: "collapse",
                                    margin: 0,
                                    padding: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    MozOsxFontSmoothing: "grayscale",
                                    fontSize: 0,
                                    lineHeight: 0,
                                    msoLineHeightRule: "exactly",
                                    backgroundSize: "100% 100%",
                                    borderTopRightRadius: 5,
                                  }}
                                  align="left"
                                  height={156}
                                  valign="bottom"
                                  width={252}
                                >
                                  <a
                                    href=""
                                    target="_blank"
                                    style={{
                                      WebkitFontSmoothing: "antialiased",
                                      MozOsxFontSmoothing: "grayscale",
                                      outline: 0,
                                      textDecoration: "none",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      height={156}
                                      width={252}
                                      src="https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Right.png"
                                      style={{
                                        display: "block",
                                        border: 0,
                                        lineHeight: "100%",
                                        width: "100%",
                                      }}
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width={600}
                          style={{ minWidth: 600 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  width: 472,
                                  fontFamily:
                                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                  msoLineHeightRule: "exactly",
                                  verticalAlign: "middle",
                                  color: "#32325d",
                                  fontSize: 24,
                                  lineHeight: "32px",
                                }}
                              >
                                Receipt from acct_1FGdhVHMnpUaEabv
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                height={12}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width={600}
                          style={{ minWidth: 600 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  width: 472,
                                  fontFamily:
                                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                  msoLineHeightRule: "exactly",
                                  verticalAlign: "middle",
                                  color: "#8898aa",
                                  fontSize: 15,
                                  lineHeight: "18px",
                                }}
                              >
                                Receipt #1258-5785
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                height={12}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                height={20}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  color: "#687385",
                                  fontFamily:
                                    '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica", sans-serif',
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  lineHeight: 1,
                                  textTransform: "uppercase",
                                }}
                              ></td>
                              <td
                                width={64}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                              <td
                                valign="top"
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                }}
                              >
                                <table
                                  style={{
                                    border: 0,
                                    borderCollapse: "collapse",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          border: 0,
                                          borderCollapse: "collapse",
                                          margin: 0,
                                          padding: 0,
                                          WebkitFontSmoothing: "antialiased",
                                          MozOsxFontSmoothing: "grayscale",
                                          fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                          msoLineHeightRule: "exactly",
                                          verticalAlign: "middle",
                                          color: "#8898aa",
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          whiteSpace: "nowrap",
                                          fontWeight: "bold",
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        Amount paid
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          border: 0,
                                          borderCollapse: "collapse",
                                          margin: 0,
                                          padding: 0,
                                          WebkitFontSmoothing: "antialiased",
                                          MozOsxFontSmoothing: "grayscale",
                                          fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                          msoLineHeightRule: "exactly",
                                          verticalAlign: "middle",
                                          color: "#525f7f",
                                          fontSize: 15,
                                          lineHeight: "24px",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        $
                                        {(
                                          JSON.parse(
                                            sessionStorage.getItem(
                                              "itineraCheckout"
                                            )
                                          ).price / 100
                                        ).toFixed(2)}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td
                                width={20}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                              <td
                                valign="top"
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                }}
                              >
                                <table
                                  style={{
                                    border: 0,
                                    borderCollapse: "collapse",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          border: 0,
                                          borderCollapse: "collapse",
                                          margin: 0,
                                          padding: 0,
                                          WebkitFontSmoothing: "antialiased",
                                          MozOsxFontSmoothing: "grayscale",
                                          fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                          msoLineHeightRule: "exactly",
                                          verticalAlign: "middle",
                                          color: "#8898aa",
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          whiteSpace: "nowrap",
                                          fontWeight: "bold",
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        Date paid
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          border: 0,
                                          borderCollapse: "collapse",
                                          margin: 0,
                                          padding: 0,
                                          WebkitFontSmoothing: "antialiased",
                                          MozOsxFontSmoothing: "grayscale",
                                          fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                          msoLineHeightRule: "exactly",
                                          verticalAlign: "middle",
                                          color: "#525f7f",
                                          fontSize: 15,
                                          lineHeight: "24px",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        {new Date().toLocaleString("en-US", {
                                          month: "short",
                                          day: "2-digit",
                                          year: "numeric",
                                          hour: "2-digit",
                                          minute: "2-digit",
                                          second: "2-digit",
                                          hour12: true,
                                        })}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td
                                width={20}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                              <td
                                valign="top"
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                }}
                              >
                                <table
                                  style={{
                                    border: 0,
                                    borderCollapse: "collapse",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          border: 0,
                                          borderCollapse: "collapse",
                                          margin: 0,
                                          padding: 0,
                                          WebkitFontSmoothing: "antialiased",
                                          MozOsxFontSmoothing: "grayscale",
                                          fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                          msoLineHeightRule: "exactly",
                                          verticalAlign: "middle",
                                          color: "#8898aa",
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          whiteSpace: "nowrap",
                                          fontWeight: "bold",
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        Payment method
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          border: 0,
                                          borderCollapse: "collapse",
                                          margin: 0,
                                          padding: 0,
                                          WebkitFontSmoothing: "antialiased",
                                          MozOsxFontSmoothing: "grayscale",
                                          fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                          msoLineHeightRule: "exactly",
                                          verticalAlign: "middle",
                                          color: "#525f7f",
                                          fontSize: 15,
                                          lineHeight: "24px",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        <span>
                                          <img
                                            alt="Visa"
                                            height={16}
                                            src="https://stripe-images.s3.amazonaws.com/emails/receipt_assets/card/visa-dark@2x.png"
                                            style={{
                                              border: 0,
                                              margin: 0,
                                              padding: 0,
                                              verticalAlign: "text-bottom",
                                            }}
                                            width={36}
                                          />
                                        </span>
                                        <span> - 4242</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td
                                width={64}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                height={32}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width={600}
                          style={{ minWidth: 600 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                colSpan={3}
                                height={8}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  color: "#687385",
                                  fontFamily:
                                    '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica", sans-serif',
                                  fontWeight: 400,
                                  fontSize: 12,
                                  lineHeight: 1,
                                  textTransform: "uppercase",
                                }}
                              >
                                <span
                                  style={{
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    fontWeight: "bold",
                                  }}
                                >
                                  Summary
                                </span>
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                height={8}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width={600}
                          style={{ minWidth: 600 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                colSpan={3}
                                height={24}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                              <td style={{ border: 0, margin: 0, padding: 0 }}>
                                <table
                                  bgcolor="#f6f9fc"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  style={{ borderRadius: 8 }}
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          border: 0,
                                          margin: 0,
                                          padding: 0,
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                colSpan={3}
                                                height={12}
                                                style={{
                                                  border: 0,
                                                  margin: 0,
                                                  padding: 0,
                                                  fontSize: 1,
                                                  lineHeight: 1,
                                                  msoLineHeightRule: "exactly",
                                                }}
                                              >
                                                <div>
                                                  &nbsp;
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                style={{
                                                  border: 0,
                                                  margin: 0,
                                                  padding: 0,
                                                  fontSize: 1,
                                                  lineHeight: 1,
                                                  msoLineHeightRule: "exactly",
                                                }}
                                                width={16}
                                              >
                                                <div>
                                                  &nbsp;
                                                </div>
                                              </td>
                                              <td
                                                style={{
                                                  border: 0,
                                                  margin: 0,
                                                  padding: 0,
                                                  color: "#414552",
                                                  fontFamily:
                                                    '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica", sans-serif',
                                                  fontSize: 16,
                                                  lineHeight: 1,
                                                }}
                                              >
                                                <table
                                                  style={{
                                                    paddingLeft: 5,
                                                    paddingRight: 5,
                                                  }}
                                                  width="100%"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td></td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          fontFamily:
                                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                                          msoLineHeightRule:
                                                            "exactly",
                                                          verticalAlign:
                                                            "middle",
                                                          color: "#525f7f",
                                                          fontSize: 15,
                                                          lineHeight: "24px",
                                                          width: "100%",
                                                        }}
                                                      >
                                                        (created by Stripe)
                                                      </td>
                                                      <td
                                                        width={8}
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          color: "#ffffff",
                                                          fontSize: 1,
                                                          lineHeight: 1,
                                                          msoLineHeightRule:
                                                            "exactly",
                                                        }}
                                                      >
                                                        &nbsp;
                                                      </td>
                                                      <td
                                                        align="right"
                                                        valign="top"
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          fontFamily:
                                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                                          msoLineHeightRule:
                                                            "exactly",
                                                          verticalAlign:
                                                            "middle",
                                                          color: "#525f7f",
                                                          fontSize: 15,
                                                          lineHeight: "24px",
                                                        }}
                                                      >
                                                        $
                                                        {(
                                                          JSON.parse(
                                                            sessionStorage.getItem(
                                                              "itineraCheckout"
                                                            )
                                                          ).price / 100
                                                        ).toFixed(2)}
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        colSpan={3}
                                                        height={6}
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          color: "#ffffff",
                                                          fontSize: 1,
                                                          lineHeight: 1,
                                                          msoLineHeightRule:
                                                            "exactly",
                                                        }}
                                                      >
                                                        &nbsp;
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        colSpan={3}
                                                        height={6}
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          color: "#ffffff",
                                                          fontSize: 1,
                                                          lineHeight: 1,
                                                          msoLineHeightRule:
                                                            "exactly",
                                                        }}
                                                      >
                                                        &nbsp;
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        bgcolor="e6ebf1"
                                                        colSpan={3}
                                                        height={1}
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          color: "#ffffff",
                                                          fontSize: 1,
                                                          lineHeight: 1,
                                                          msoLineHeightRule:
                                                            "exactly",
                                                        }}
                                                      >
                                                        &nbsp;
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        colSpan={3}
                                                        height={8}
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          color: "#ffffff",
                                                          fontSize: 1,
                                                          lineHeight: 1,
                                                          msoLineHeightRule:
                                                            "exactly",
                                                        }}
                                                      >
                                                        &nbsp;
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          fontFamily:
                                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                                          msoLineHeightRule:
                                                            "exactly",
                                                          verticalAlign:
                                                            "middle",
                                                          color: "#525f7f",
                                                          fontSize: 15,
                                                          lineHeight: "24px",
                                                          width: "100%",
                                                        }}
                                                      >
                                                        <strong>
                                                          Amount charged
                                                        </strong>
                                                      </td>
                                                      <td
                                                        width={8}
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          color: "#ffffff",
                                                          fontSize: 1,
                                                          lineHeight: 1,
                                                          msoLineHeightRule:
                                                            "exactly",
                                                        }}
                                                      >
                                                        &nbsp;
                                                      </td>
                                                      <td
                                                        align="right"
                                                        valign="top"
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          fontFamily:
                                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                                          msoLineHeightRule:
                                                            "exactly",
                                                          verticalAlign:
                                                            "middle",
                                                          color: "#525f7f",
                                                          fontSize: 15,
                                                          lineHeight: "24px",
                                                        }}
                                                      >
                                                        <strong>
                                                          $
                                                          {(
                                                            JSON.parse(
                                                              sessionStorage.getItem(
                                                                "itineraCheckout"
                                                              )
                                                            ).price / 100
                                                          ).toFixed(2)}
                                                        </strong>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        colSpan={3}
                                                        height={6}
                                                        style={{
                                                          border: 0,
                                                          borderCollapse:
                                                            "collapse",
                                                          margin: 0,
                                                          padding: 0,
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          MozOsxFontSmoothing:
                                                            "grayscale",
                                                          color: "#ffffff",
                                                          fontSize: 1,
                                                          lineHeight: 1,
                                                          msoLineHeightRule:
                                                            "exactly",
                                                        }}
                                                      >
                                                        &nbsp;
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                              <td
                                                style={{
                                                  border: 0,
                                                  margin: 0,
                                                  padding: 0,
                                                  fontSize: 1,
                                                  lineHeight: 1,
                                                  msoLineHeightRule: "exactly",
                                                }}
                                                width={16}
                                              >
                                                <div>
                                                  &nbsp;
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                colSpan={3}
                                                height={12}
                                                style={{
                                                  border: 0,
                                                  margin: 0,
                                                  padding: 0,
                                                  fontSize: 1,
                                                  lineHeight: 1,
                                                  msoLineHeightRule: "exactly",
                                                }}
                                              >
                                                <div>
                                                  &nbsp;
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                height={24}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width={600}
                          style={{ minWidth: 600 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                colSpan={3}
                                height={24}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                bgcolor="#e6ebf1"
                                height={1}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                height={24}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width={600}
                          style={{ minWidth: 600 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                colSpan={3}
                                height={8}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  color: "#414552 !important",
                                  fontFamily:
                                    '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica", sans-serif',
                                  fontWeight: 400,
                                  fontSize: 16,
                                  lineHeight: 1,
                                }}
                              >
                                If you have any questions, contact us at{" "}
                                <a
                                  style={{
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    color: "#625afa",
                                    fontWeight: "bold",
                                    textDecoration: "none",
                                  }}
                                  href="mailto:byndasma@gmail.com"
                                >
                                  byndasma@gmail.com
                                </a>
                                .
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                height={8}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width={600}
                          style={{ minWidth: 600 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                colSpan={3}
                                height={24}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                bgcolor="#e6ebf1"
                                height={1}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                                width={48}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                height={24}
                                style={{
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  fontSize: 1,
                                  lineHeight: 1,
                                  maxHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                <div>
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          style={{
                            border: 0,
                            borderCollapse: "collapse",
                            margin: 0,
                            padding: 0,
                            backgroundColor: "#ffffff",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                width={64}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  width: 472,
                                  fontFamily:
                                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                  msoLineHeightRule: "exactly",
                                  verticalAlign: "middle",
                                  color: "#8898aa",
                                  fontSize: 12,
                                  lineHeight: 1,
                                }}
                              >
                                Something wrong with the email?{" "}
                                <a
                                  href="https://dashboard.stripe.com/receipts/payment/CAcQARoXChVhY2N0XzFGR2RoVkhNbnBVYUVhYnYoj_fztQYyBjdwtWcKETovFq5K2e28Yha7V7-2t1WlY5rrir_HbsN3sfd3uuhgArg_yjV5Lx_78KLlYfVtXXg"
                                  style={{
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    color: "#556cd6",
                                    fontFamily:
                                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                    textDecoration: "none",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span
                                    style={{
                                      border: 0,
                                      margin: 0,
                                      padding: 0,
                                      color: "#556cd6",
                                      textDecoration: "none",
                                    }}
                                  >
                                    View it in your browser.
                                  </span>
                                </a>
                              </td>
                              <td
                                width={64}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          width="100%"
                          style={{
                            border: 0,
                            borderCollapse: "collapse",
                            margin: 0,
                            padding: 0,
                            backgroundColor: "#ffffff",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                height={20}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          style={{
                            border: 0,
                            borderCollapse: "collapse",
                            margin: 0,
                            padding: 0,
                            backgroundColor: "#ffffff",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                width={64}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                              <td
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  width: 472,
                                  fontFamily:
                                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                  msoLineHeightRule: "exactly",
                                  verticalAlign: "middle",
                                  color: "#8898aa",
                                  fontSize: 12,
                                  lineHeight: "18px",
                                }}
                              >
                                You're receiving this email because you made a
                                purchase at acct_1FGdhVHMnpUaEabv, which
                                partners with{" "}
                                <a
                                  style={{
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    color: "#556cd6",
                                    fontFamily:
                                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
                                    textDecoration: "none",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                  href="https://stripe.com/"
                                >
                                  Stripe
                                </a>{" "}
                                to provide invoicing and payment processing.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          width="100%"
                          style={{
                            border: 0,
                            borderCollapse: "collapse",
                            margin: 0,
                            padding: 0,
                            backgroundColor: "#ffffff",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                height={20}
                                style={{
                                  border: 0,
                                  borderCollapse: "collapse",
                                  margin: 0,
                                  padding: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  MozOsxFontSmoothing: "grayscale",
                                  color: "#ffffff",
                                  fontSize: 1,
                                  lineHeight: 1,
                                  msoLineHeightRule: "exactly",
                                }}
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* /Wrapper */}
              </td>
            </tr>

            <tr>
              <td
                height={64}
              >
                <div>&nbsp;</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CheckoutSuccessPage;
