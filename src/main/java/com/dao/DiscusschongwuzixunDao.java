package com.dao;

import com.entity.DiscusschongwuzixunEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscusschongwuzixunVO;
import com.entity.view.DiscusschongwuzixunView;


/**
 * 宠物资讯评论表
 * 
 * @author 
 * @email 
 * @date 2020-11-12 11:19:48
 */
public interface DiscusschongwuzixunDao extends BaseMapper<DiscusschongwuzixunEntity> {
	
	List<DiscusschongwuzixunVO> selectListVO(@Param("ew") Wrapper<DiscusschongwuzixunEntity> wrapper);
	
	DiscusschongwuzixunVO selectVO(@Param("ew") Wrapper<DiscusschongwuzixunEntity> wrapper);
	
	List<DiscusschongwuzixunView> selectListView(@Param("ew") Wrapper<DiscusschongwuzixunEntity> wrapper);

	List<DiscusschongwuzixunView> selectListView(Pagination page,@Param("ew") Wrapper<DiscusschongwuzixunEntity> wrapper);
	
	DiscusschongwuzixunView selectView(@Param("ew") Wrapper<DiscusschongwuzixunEntity> wrapper);
	
}
