import * as React from 'react';
import styles from './Cicd.module.scss';
import { ICicdProps } from './ICicdProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Cicd extends React.Component<ICicdProps, {}> {
  public render(): React.ReactElement<ICicdProps> {
    return (
      <div className={ styles.cicd }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint for CICD Integration!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
