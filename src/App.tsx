import React, { useEffect, useState } from 'react'
import './App.css'
import { EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import ReactWEditor from 'wangeditor-for-react'

export default function App() {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	)
	useEffect(() => {
		console.log(editorState)
	}, [editorState])
	return (
		<div>
			<div
				style={{
					padding: '2px',
					minHeight: '400px',
				}}
			>
				<ReactWEditor
					defaultValue={'<h1>标题</h1>'}
					linkImgCallback={(src, alt, href) => {
						// 插入网络图片的回调事件
						console.log('图片 src ', src)
						console.log('图片文字说明', alt)
						console.log('跳转链接', href)
					}}
					onlineVideoCallback={(video) => {
						// 插入网络视频的回调事件
						console.log('插入视频内容', video)
					}}
					onChange={(html) => {
						console.log('onChange html:', html)
					}}
					onBlur={(html) => {
						console.log('onBlur html:', html)
					}}
					onFocus={(html) => {
						console.log('onFocus html:', html)
					}}
				/>
				{/* <Editor
					editorState={editorState}
					onEditorStateChange={setEditorState}
					wrapperClassName="wrapper-class"
					editorClassName="editor-class"
					toolbarClassName="toolbar-class"
					toolbar={{
						inline: { inDropdown: true },
						list: { inDropdown: true },
						textAlign: { inDropdown: true },
						link: { inDropdown: true },
						history: { inDropdown: true },
					}}
				/> */}
			</div>
		</div>
	)
}
