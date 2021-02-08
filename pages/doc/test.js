import Head from 'next/head'
// import styles from '../../styles/test.css'
// import styles from '../../styles/Test.Module.css'
import styles from '.../../../styles/Home.module.css'
import Button from '../../components/Button'
// import globalStyles from '../../../styles/global.css'

export default function test() {
    return <div>
        <h1 className={"main-heading"}>this is head</h1>

            this is body
            <blockquote>
            <p>This blockquote is styled</p>
        </blockquote>
        <div style={{ color: "red", "text-align": "center" }}> abcd
        <a href="https://www.baidu.com">baidu</a>
            <Button text="ahah"></Button>
        </div>
        <div style={{ color: "red", "text-align": "center" }}> abcd
        <a href="https://www.baidu.com">baidu</a>
            <Button text="ahah"></Button>
        </div>
    </div>
}