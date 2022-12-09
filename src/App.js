import { useState } from 'react';
import './App.css';
import { CdsButton } from '@cds/react/button';
import { CdsTag } from '@cds/react/tag';
import { CdsBadge } from '@cds/react/badge';
import { CdsAlert, CdsAlertGroup } from '@cds/react/alert';
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, userIcon, bugIcon, vmBugIcon, cogIcon } from '@cds/core/icon';
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(bugIcon);
ClarityIcons.addIcons(vmBugIcon);
ClarityIcons.addIcons(cogIcon);

function Home() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Clarity React samples!</h1>
      <h2 cds-text="section">Buttons</h2>
      <section cds-layout="horizontal gap:sm">
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>disabled</CdsButton>
        標準ボタン
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsButton action="outline">outline</CdsButton>
        <CdsButton action="outline" status="success">success</CdsButton>
        <CdsButton action="outline" status="danger">danger</CdsButton>
        <CdsButton action="outline" disabled>disabled</CdsButton>
        フチのみボタン
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsButton action="flat">flat</CdsButton>
        <CdsButton action="flat" disabled>flat disabled</CdsButton>
        フラットボタン
      </section>
      <h2 cds-text="section">Tags & Badges</h2>
      <section cds-layout="horizontal gap:sm">
        <CdsTag readonly status="info">Info</CdsTag>
        <CdsTag readonly status="success">Success</CdsTag>
        <CdsTag readonly status="warning">Warning</CdsTag>
        <CdsTag readonly status="danger">Danger</CdsTag>
        タグのみ
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsTag color="gray">Austin <CdsBadge>1</CdsBadge></CdsTag>
        <CdsTag color="purple">New York <CdsBadge>2</CdsBadge></CdsTag>
        <CdsTag color="blue">Palo Alto <CdsBadge>3</CdsBadge></CdsTag>
        <CdsTag color="orange">Ohio <CdsBadge>12</CdsBadge></CdsTag>
        <CdsTag color="light-blue">Seattle <CdsBadge>15</CdsBadge></CdsTag>
        タグ＋バッジ
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsBadge status="info">2</CdsBadge>
        <CdsBadge status="success">3</CdsBadge>
        <CdsBadge status="warning">12</CdsBadge>
        <CdsBadge status="danger">15</CdsBadge>
        <CdsBadge color="gray">1</CdsBadge>
        <CdsBadge color="purple">1</CdsBadge>
        <CdsBadge color="blue">15</CdsBadge>
        <CdsBadge color="orange">2</CdsBadge>
        <CdsBadge color="light-blue">3</CdsBadge>
        バッジのみ
      </section>
      <h2 cds-text="section">Icons</h2>
      <section cds-layout="horizontal gap:sm">
        <CdsIcon size="lg" shape="user"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
        userアイコン/フチのみ表示
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsIcon size="lg" shape="bug" solid></CdsIcon>
        <CdsIcon size="lg" shape="bug" solid badge="info"></CdsIcon>
        <CdsIcon size="lg" shape="bug" solid badge="success"></CdsIcon>
        <CdsIcon size="lg" shape="bug" solid badge="danger"></CdsIcon>
        <CdsIcon size="lg" shape="bug" solid badge="warning-triangle"></CdsIcon>
        bugアイコン/塗りつぶし
      </section>
      <h2 cds-text="section">Action Button</h2>
      <CdsButton onClick={() => {
        setCount(count + 1);
        setShow({ show: true });
      }}>You clicked {count} times.</CdsButton>
      <br></br>
      {show ? (
        <CdsAlertGroup status="warning">
          <CdsAlert onCloseChange={() => setShow({ show: false })} closable>
            You Voted
          </CdsAlert>
        </CdsAlertGroup>
      ) : ('')}
    </div>
  );
}

function App() {
  return (
    <div className="main-container">
      <header className="header header-6">
        <div className="branding">
          <a href="#">
              <CdsIcon shape="vm-bug"></CdsIcon>
            <span className="title">Project Clarity</span>
          </a>
        </div>
        <form className="search">
          <label htmlFor="search-input-sidenav-ng">
            <input id="search-input-sidenav-ng" type="text" placeholder="Search for keywords..." />
          </label>
        </form>
        <div className="settings">
          <a href="#" className="nav-link nav-icon">
            <CdsIcon shape="cog"></CdsIcon>
          </a>
        </div>
      </header>
      <nav className="subnav">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Subnav Link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Subnav Link 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Subnav Link 3</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Subnav Link 4</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Subnav Link 5</a>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <div className="content-area">
          <Home />
        </div>
        <nav className="sidenav">
          <section className="sidenav-content">
            <section className="nav-group">
              <input id="tabexample2" type="checkbox" />
              <label htmlFor="tabexample2">Sidenav</label>
              <ul className="nav-list">
                <li><a className="nav-link">Link 1</a></li>
                <li><a className="nav-link">Link 2</a></li>
                <li><a className="nav-link active">Link 3</a></li>
                <li><a className="nav-link">Link 4</a></li>
                <li><a className="nav-link">Link 5</a></li>
                <li><a className="nav-link">Link 6</a></li>
              </ul>
            </section>
          </section>
        </nav>
      </div>
    </div>
  );
}

export default App;
