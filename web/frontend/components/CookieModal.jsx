import { UnstyledLink } from '@shopify/polaris';
import React, { useState, useCallback } from 'react';
import '../assets/CookieModal.css';

export function CookieModal() {
  const [active, setActive] = useState(true);

  const handleChange = useCallback(() => setActive(!active), [active]);

  // const activator = <Button onClick={handleChange}>Open cookie banner</Button>;

  return (
    <>
      <button type="button" onClick={handleChange}>
        Open cookie banner
      </button>
      {active && (
        <div className="container">
          <div className="modal__container">
            <div className="modal__main-group">
              <img
                src="../../assets/cookie-image.png"
                alt="cookies image"
                className="modal__cookies--img"
              />

              <div className="modal__text-container">
                <article className="modal__text">
                  Our website uses cookies. By continuing navigating, we assume
                  your permission to deploy cookies as detailed in our&nbsp;
                  <span className="privacy__link">
                    <UnstyledLink>Privacy Policy</UnstyledLink>
                  </span>.
                </article>
              </div>
            </div>

            <div className="modal__cookie-buttons cookie">
              <button
                type="button"
                className="cookie__accept"
                onClick={handleChange}
              >
                <img
                  src="../../assets/cookie-icon.svg"
                  alt="cookie icon accept"
                  className="cookie__icon"
                />
                Accept cookies
              </button>
              <button
                type="button"
                className="cookie__decline"
                onClick={handleChange}
              >
                Decline
              </button>
              <button
                type="button"
                className="cookie__close"
                onClick={handleChange}
              >
                <img
                  src="../../assets/close.svg"
                  alt="cookie close button"
                  className="close__icon"
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <div
        style={{
          height: '500px',
          width: '100%',
        }}
      >
        <Modal
          activator={activator}
          open={active}
          onClose={handleChange}
          title="Reach more shoppers with Instagram product tags"
          primaryAction={{
            content: 'Accept cookies',
            onAction: handleChange,
          }}
          secondaryActions={[
            {
              content: 'Decline',
              onAction: handleChange,
            },
          ]}
        >
          <Modal.Section>
            <TextContainer>
              <p>
                Our website uses cookies. By continuing navigating, we assume
                your permission to deploy cookies as detailed in our{' '}
                <Link>Privacy Policy</Link>.
              </p>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </div> */}
    </>
  );
}
