from collections import defaultdict
from heapq import heappush, heappop

class Solution(object):
    def getSkyline(self, buildings):
        """
        :type buildings: List[List[int]]
        :rtype: List[List[int]]
        """
        if not buildings:
            return []
        
        points = []
        for l, r, h in buildings:
            points.extend([(l,-h),(r,h)])
            
        points.sort()
        print(points)
        
        result = []
        heights = [0]
        prev = heights[0]
        
        ignored = defaultdict(int)
        
        for x, h in points:
            if h < 0:
                heappush(heights, h)
            else:
                ignored[-h] += 1
            print('{} {}'.format(heights, ignored))
            print(heights[0])
            while ignored[heights[0]] > 0:
                ignored[heights[0]] -= 1
                heappop(heights)
                print(heights)
            cur = heights[0]
            print('cur:{} prev:{}'.format(cur,prev))
            if cur != prev:
                result.append((x, -cur))
                print('x:{} -cur:{} is added.'.format(x,-cur))
                prev = cur
        print(result)
s = Solution()
s.getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]])