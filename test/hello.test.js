/*
 * @Description:
 * @version:
 * @Author: youyuan
 * @Date: 2022-01-12 22:05:21
 * @LastEdited:
 * @LastEditTime: 2022-01-12 22:24:23
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Hello from "../src/pages/example/Hello";

let container = null;

beforeEach(() => {
  // 创建一个DOM元素作为渲染目标
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("渲染有或无名称", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("嘿，陌生人");

  act(() => {
    render(<Hello name="Jenney" />, container);
  });
  expect(container.textContent).toBe("你好，Jenney");

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("你好，Margaret");
});
