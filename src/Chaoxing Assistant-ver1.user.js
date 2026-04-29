// ==UserScript==
// @name         Chaoxing Assistant
// @namespace    http://tampermonkey.net/
// @version      ver1
// @description  try to take over the world!
// @author       popphyee
// @match        *://*.chaoxing.com/mooc-ans/work/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if (window.self !== window.top) {


        function getAllQuestions() {
            const list = [];
            // 拿到所有题目容器
            const quesList = document.querySelectorAll(".TiMu");

            quesList.forEach(item => {
                // 修复：直接取 qtContent 内部所有文本，不再依赖p标签
                const qtDom = item.querySelector(".qtContent");
                let question = qtDom.innerText.replace(/\s+/g, " ").trim();

                // 提取带ABCD选项
                const opts = [];
                const liList = item.querySelectorAll(".Zy_ulTop li");
                liList.forEach(li => {
                    const label = li.querySelector("i").textContent.trim();
                    const text = li.querySelector("a").textContent.trim();
                    opts.push(label + text);
                });

                list.push({
                    question: question,
                    options: opts
                });
            });

            return list;
        }

        // 使用
        const res = getAllQuestions();
        console.log(res);

        // 给页面所有题目 批量插入解析框
        function insertAllAnalysis() {
            // 获取所有题目
            const questions = document.querySelectorAll('.TiMu');

            // 遍历每一道题
            questions.forEach((q, index) => {
                // 1. 编造解析内容（后面你把这里换成AI结果即可）
                const analysisText = `这是第 ${index + 1} 题的解析：本题主要考察核心概念的理解，需要掌握定义、特征以及应用场景。做题时要抓住关键词，排除干扰选项，选择最符合题意的答案。`;

                // 2. 创建解析DOM元素
                const analysisDiv = document.createElement('div');
                analysisDiv.className = 'custom-analysis';
                analysisDiv.style.marginTop = '12px';
                analysisDiv.style.padding = '12px 16px';
                analysisDiv.style.backgroundColor = '#e6f7ff'; // 浅蓝色
                analysisDiv.style.borderRadius = '6px';
                analysisDiv.style.fontSize = '14px';
                analysisDiv.style.lineHeight = '1.6';
                analysisDiv.style.color = '#333';

                // 3. 加标题
                analysisDiv.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 6px;">📝 解析</div>
      <div>${analysisText}</div>
    `;

                // 4. 插入到题目下方
                q.appendChild(analysisDiv);
            });
        }

        // 执行插入
        insertAllAnalysis();



    } else {
        return;
    }
})();