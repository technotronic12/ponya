export interface MenuItemData {
  index: number
  text: string
  route?: string
  icon: string
}

const menuItems = [
  {
    index: 0,
    text: 'Home',
    route: '/',
    icon:
      'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iaG9tZSI+CgkJPHBvbHlnb24gcG9pbnRzPSIyMDQsNDcxLjc1IDIwNCwzMTguNzUgMzA2LDMxOC43NSAzMDYsNDcxLjc1IDQzMy41LDQ3MS43NSA0MzMuNSwyNjcuNzUgNTEwLDI2Ny43NSAyNTUsMzguMjUgMCwyNjcuNzUgICAgIDc2LjUsMjY3Ljc1IDc2LjUsNDcxLjc1ICAgIiBmaWxsPSIjOGMzOWZlIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
  },
  {
    index: 1,
    text: 'Blog',
    route: '/blog',
    icon:
      'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQ2OS44NjIgNDY5Ljg2MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY5Ljg2MiA0NjkuODYzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik00NDcuNjMzLDM5LjUzN0gyNTYuNDQzYy0xMi4yNjEsMC0yMi4yMzIsOS45NzItMjIuMjMyLDIyLjIzdjk4LjY1MmMwLDEyLjI1OCw5Ljk3MywyMi4yMjksMjIuMjMyLDIyLjIyOWgxNi43ODd2MzkuMTYxICAgICBjMCwyLjcwNywxLjU3OSw1LjE2NSw0LjA0Myw2LjI5MmMwLjkyLDAuNDIsMS45MDEsMC42MjcsMi44NzUsMC42MjdjMS42MzEsMCwzLjI0My0wLjU3Niw0LjUyNC0xLjY4NWw1MS4zNzktNDQuMzk2aDExMS41OCAgICAgYzEyLjI1OCwwLDIyLjIzLTkuOTczLDIyLjIzLTIyLjIzdi05OC42NUM0NjkuODYzLDQ5LjUwOSw0NTkuODkxLDM5LjUzNyw0NDcuNjMzLDM5LjUzN3ogTTI5Ni42ODYsMTI3LjQ1ICAgICBjLTkuNzQzLDAtMTcuNjQyLTcuOS0xNy42NDItMTcuNjQ0czcuODk3LTE3LjY0NCwxNy42NDItMTcuNjQ0YzkuNzQ2LDAsMTcuNjQ2LDcuODk5LDE3LjY0NiwxNy42NDQgICAgIEMzMTQuMzMsMTE5LjU0OSwzMDYuNDMyLDEyNy40NSwyOTYuNjg2LDEyNy40NXogTTM1Mi4wMzcsMTI3LjQ1Yy05Ljc0MiwwLTE3LjY0NC03LjktMTcuNjQ0LTE3LjY0NHM3LjktMTcuNjQ0LDE3LjY0NC0xNy42NDQgICAgIGM5Ljc0NCwwLDE3LjY0NSw3Ljg5OSwxNy42NDUsMTcuNjQ0QzM2OS42ODIsMTE5LjU0OSwzNjEuNzgxLDEyNy40NSwzNTIuMDM3LDEyNy40NXogTTQwNy4zOTEsMTI3LjQ1ICAgICBjLTkuNzQzLDAtMTcuNjQzLTcuOS0xNy42NDMtMTcuNjQ0czcuODk4LTE3LjY0NCwxNy42NDMtMTcuNjQ0YzkuNzQ1LDAsMTcuNjQ0LDcuODk5LDE3LjY0NCwxNy42NDQgICAgIEM0MjUuMDMzLDExOS41NDksNDE3LjEzMywxMjcuNDUsNDA3LjM5MSwxMjcuNDV6IiBmaWxsPSIjOGMzOWZlIi8+CgkJCTxwYXRoIGQ9Ik0xNDAuODU3LDEzNC45NThjLTQzLjA5MywwLTY2Ljk0MSwyMi4zMy02Ni41MDYsNjUuMzU4YzAuNjMxLDU4LjkzMiwyNS42NzMsOTQuNjgyLDY2LjUwNiw5NC4wNTggICAgIGMwLDAsNjYuNDczLDIuNjk1LDY2LjQ3My05NC4wNThDMjA3LjMzLDE1Ny4yODgsMTg0Ljg3MywxMzQuOTU4LDE0MC44NTcsMTM0Ljk1OHoiIGZpbGw9IiM4YzM5ZmUiLz4KCQkJPHBhdGggZD0iTTI1OC40MzQsMzM5LjEwM2wtNjYuNDE5LTI2LjQ4bC0xNS41NTQtMTMuMTA3Yy00LjEwOC0zLjQ3MS0xMC4xNzYtMy4yMTUtMTMuOTg2LDAuNTc0bC0yMS42MjQsMjEuNTA0bC0yMS42ODgtMjEuNTExICAgICBjLTMuODEzLTMuNzgyLTkuODcyLTQuMDI2LTEzLjk3NS0wLjU2NmwtMTUuNTU2LDEzLjEwNmwtNjYuNDIzLDI2LjQ4NEMxLjgyLDM0Ny42MjYsMS44MzYsNDIzLjM3MSwwLDQzMC4zMjZoMjgxLjY3NCAgICAgQzI3OS44NDIsNDIzLjM4OCwyNzkuODMxLDM0Ny42MTUsMjU4LjQzNCwzMzkuMTAzeiIgZmlsbD0iIzhjMzlmZSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K',
  },
  {
    index: 2,
    text: 'Contact',
    route: '/contact',
    icon:
      'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzA2Ljc2OCwzNDYuODE0aDAuMTMxYzQuNjE1LDAsOS4xNzYtMS4zMzksMTIuODY2LTMuNzc3bDEuMDAxLTAuNjQzYzAuMjE4LTAuMTQyLDAuNDQ2LTAuMjcxLDAuNjc1LTAuNDI0bDExLjY1OC05LjY0NSAgIGwyNzguMjU5LTIyOS42MjRjLTAuNTc2LTAuNzk1LTEuNTU3LTEuMzM5LTIuNjAyLTEuMzM5SDMuMjMzYy0wLjc1MSwwLTEuNDQ4LDAuMjcyLTIuMDAzLDAuNzI5bDI5MS4xMjUsMjM5Ljk1NCAgIEMyOTYuMDI0LDM0NS4wODMsMzAxLjI1OSwzNDYuODE0LDMwNi43NjgsMzQ2LjgxNHogTTAsMTMzLjg5OXYzNDAuMzdsMjA4LjU1LTE2OC40NzFMMCwxMzMuODk5eiBNNDAzLjY2OCwzMDYuOTQxTDYxMiw0NzQuMzU2ICAgVjEzNS4wMzFMNDAzLjY2OCwzMDYuOTQxeiBNMzM3LjQzMSwzNjEuNTg1Yy04LjMwNSw2LjgxNC0xOS4xNjgsMTAuNTctMzAuNTc2LDEwLjU3Yy0xMS40NTEsMC0yMi4zMDQtMy43MzQtMzAuNTg3LTEwLjUxNiAgIGwtNDcuNzY1LTM5LjM5NEwwLDUwNi44MDZ2MC41ODdjMCwxLjc1MywxLjUwMiwzLjI0NCwzLjI3NiwzLjI0NGg2MDUuNDkxYzEuNzQxLDAsMy4yMzItMS40OTEsMy4yMzItMy4yNTV2LTAuNTQ0TDM4My42OTMsMzIzLjQgICBMMzM3LjQzMSwzNjEuNTg1eiIgZmlsbD0iIzhjMzlmZSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
  },
]

export { menuItems }
